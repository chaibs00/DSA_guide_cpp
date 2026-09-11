/* ==========================================================================
   search.js — full-text client-side search.

   On the first search, every page listed in SEARCH_INDEX is fetched once,
   split by heading, and kept in sessionStorage. Matches link straight to
   the heading they were found under.

   SEARCH_INDEX is still the source of truth for WHICH pages exist — its
   `body` keywords are folded in as extra search terms, so a page stays
   findable by a word that never appears in its text.
   ========================================================================== */

(function () {
  const base = typeof BASE !== "undefined" ? BASE : "";
  const CACHE_KEY = "dsa-search-index-v1";

  let docs = null;          // flat list of indexed sections
  let building = false;

  // ---------- overlay ----------
  const overlay = document.createElement("div");
  overlay.className = "search-overlay";
  overlay.innerHTML = `
    <div class="search-modal">
      <div class="search-input-row">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
        <input id="search-input" type="text" placeholder="Search docs…" autocomplete="off" />
        <span class="search-esc">Esc</span>
      </div>
      <div class="search-results" id="search-results"></div>
    </div>
  `;
  document.body.appendChild(overlay);

  const input = overlay.querySelector("#search-input");
  const resultsEl = overlay.querySelector("#search-results");
  let activeIndex = -1;
  let currentResults = [];

  // ---------- building the index ----------
  function slugify(text) {
    return text.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
  }

  function parsePage(html, entry) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const article = doc.querySelector("article.doc") || doc.body;
    const sections = [];

    // Everything before the first h2 belongs to the page itself.
    let current = {
      url: entry.url,
      page: entry.title,
      section: entry.section,
      heading: null,
      anchor: "",
      text: entry.body || "",
    };

    article.querySelectorAll("h2, h3, p, li, td, th, .callout, code").forEach((el) => {
      if (el.closest(".doc-footer-nav")) return;

      if (el.tagName === "H2" || el.tagName === "H3") {
        if (current.text.trim()) sections.push(current);
        const title = el.textContent.trim();
        current = {
          url: entry.url,
          page: entry.title,
          section: entry.section,
          heading: title,
          anchor: el.id || slugify(title),
          text: title + " ",
        };
      } else {
        current.text += el.textContent.replace(/\s+/g, " ") + " ";
      }
    });
    if (current.text.trim()) sections.push(current);

    return sections;
  }

  async function buildIndex() {
    if (docs || building) return;
    building = true;

    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        docs = JSON.parse(cached);
        building = false;
        return;
      } catch (e) { /* fall through and rebuild */ }
    }

    const all = [];
    await Promise.all(
      SEARCH_INDEX.map(async (entry) => {
        try {
          const res = await fetch(base + entry.url);
          if (!res.ok) throw new Error(res.status);
          all.push(...parsePage(await res.text(), entry));
        } catch (e) {
          // Page missing or unreachable — fall back to its keywords only.
          all.push({
            url: entry.url,
            page: entry.title,
            section: entry.section,
            heading: null,
            anchor: "",
            text: entry.body || "",
          });
        }
      })
    );

    docs = all;
    building = false;
    try { sessionStorage.setItem(CACHE_KEY, JSON.stringify(all)); } catch (e) { /* quota */ }
    if (input.value.trim()) render(search(input.value));
  }

  // ---------- searching ----------
  function search(query) {
    const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!tokens.length) return [];

    const pool = docs || SEARCH_INDEX.map((e) => ({
      url: e.url, page: e.title, section: e.section,
      heading: null, anchor: "", text: e.body || "",
    }));

    const scored = [];
    pool.forEach((d) => {
      const page = d.page.toLowerCase();
      const heading = (d.heading || "").toLowerCase();
      const text = d.text.toLowerCase();

      // Every token has to appear somewhere in this section.
      if (!tokens.every((t) => page.includes(t) || heading.includes(t) || text.includes(t))) return;

      let score = 0;
      tokens.forEach((t) => {
        if (page.includes(t)) score += 10;
        if (heading.includes(t)) score += 6;
        if (text.includes(t)) score += 1;
      });
      if (!d.heading) score += 2; // prefer the page-level hit over a deep one
      scored.push({ doc: d, score, token: tokens[0] });
    });

    // Best hit per page, then best pages overall.
    const bestPerPage = new Map();
    scored.sort((a, b) => b.score - a.score).forEach((s) => {
      const key = s.doc.url + "#" + s.doc.anchor;
      if (!bestPerPage.has(key)) bestPerPage.set(key, s);
    });

    return [...bestPerPage.values()].slice(0, 8);
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }

  function snippet(text, token) {
    const i = text.toLowerCase().indexOf(token);
    if (i < 0) return escapeHtml(text.slice(0, 110)) + (text.length > 110 ? "…" : "");
    const start = Math.max(0, i - 45);
    const cut = text.slice(start, start + 130);
    const j = cut.toLowerCase().indexOf(token);
    return (
      (start > 0 ? "…" : "") +
      escapeHtml(cut.slice(0, j)) +
      "<strong>" + escapeHtml(cut.slice(j, j + token.length)) + "</strong>" +
      escapeHtml(cut.slice(j + token.length)) +
      "…"
    );
  }

  function render(results) {
    currentResults = results;
    activeIndex = results.length ? 0 : -1;

    if (!input.value.trim()) {
      resultsEl.innerHTML = `<div class="search-empty">Type to search across the guide…</div>`;
      return;
    }
    if (!results.length) {
      resultsEl.innerHTML = building
        ? `<div class="search-empty">Indexing pages…</div>`
        : `<div class="search-empty">No pages match “${escapeHtml(input.value)}”.</div>`;
      return;
    }

    resultsEl.innerHTML = results
      .map((r, i) => {
        const d = r.doc;
        const href = base + d.url + (d.anchor ? "#" + d.anchor : "");
        const crumb = d.heading ? `${d.page} › ${d.heading}` : d.section;
        return `
      <a class="search-result${i === 0 ? " active" : ""}" href="${href}" data-idx="${i}">
        <div class="sr-section">${escapeHtml(crumb)}</div>
        <div class="sr-title">${escapeHtml(d.heading || d.page)}</div>
        <div class="sr-desc">${snippet(d.text, r.token)}</div>
      </a>`;
      })
      .join("");
  }

  function highlight(idx) {
    const items = resultsEl.querySelectorAll(".search-result");
    items.forEach((el) => el.classList.remove("active"));
    if (items[idx]) {
      items[idx].classList.add("active");
      items[idx].scrollIntoView({ block: "nearest" });
    }
  }

  function go(r) {
    const d = r.doc;
    location.href = base + d.url + (d.anchor ? "#" + d.anchor : "");
  }

  // ---------- open / close ----------
  function open() {
    overlay.classList.add("open");
    input.value = "";
    render([]);
    buildIndex();
    setTimeout(() => input.focus(), 10);
  }
  function close() { overlay.classList.remove("open"); }

  input.addEventListener("input", () => render(search(input.value)));

  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (currentResults.length) { activeIndex = (activeIndex + 1) % currentResults.length; highlight(activeIndex); }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (currentResults.length) { activeIndex = (activeIndex - 1 + currentResults.length) % currentResults.length; highlight(activeIndex); }
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && currentResults[activeIndex]) go(currentResults[activeIndex]);
    } else if (e.key === "Escape") {
      close();
    }
  });

  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });

  document.addEventListener("click", (e) => {
    if (e.target.closest("#search-trigger")) open();
  });

  document.addEventListener("keydown", (e) => {
    const tag = (e.target.tagName || "").toLowerCase();
    const typing = tag === "input" || tag === "textarea" || e.target.isContentEditable;
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      open();
    } else if (e.key === "/" && !typing) {
      e.preventDefault();
      open();
    }
  });

  // Warm the cache in the background so the first search feels instant.
  if ("requestIdleCallback" in window) requestIdleCallback(buildIndex);
  else setTimeout(buildIndex, 2000);
})();