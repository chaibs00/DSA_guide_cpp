/* ==========================================================================
   search.js — lightweight client-side search over SEARCH_INDEX
   (title/section/body keyword matching — not full page-text search).
   Opens with the search trigger button, Ctrl/Cmd+K, or "/".
   ========================================================================== */

(function () {
  const base = typeof BASE !== "undefined" ? BASE : "";

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

  function open() {
    overlay.classList.add("open");
    input.value = "";
    render([]);
    setTimeout(() => input.focus(), 10);
  }
  function close() {
    overlay.classList.remove("open");
  }

  function search(query) {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return SEARCH_INDEX.filter((item) => {
      return (
        item.title.toLowerCase().includes(q) ||
        item.section.toLowerCase().includes(q) ||
        item.body.toLowerCase().includes(q)
      );
    }).slice(0, 8);
  }

  function render(results) {
    currentResults = results;
    activeIndex = results.length ? 0 : -1;
    if (!input.value.trim()) {
      resultsEl.innerHTML = `<div class="search-empty">Type to search across the guide…</div>`;
      return;
    }
    if (!results.length) {
      resultsEl.innerHTML = `<div class="search-empty">No pages match “${input.value}”.</div>`;
      return;
    }
    resultsEl.innerHTML = results
      .map(
        (r, i) => `
      <a class="search-result${i === 0 ? " active" : ""}" href="${base}${r.url}" data-idx="${i}">
        <div class="sr-section">${r.section}</div>
        <div class="sr-title">${r.title}</div>
      </a>`
      )
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

  input.addEventListener("input", () => render(search(input.value)));

  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (currentResults.length) { activeIndex = (activeIndex + 1) % currentResults.length; highlight(activeIndex); }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (currentResults.length) { activeIndex = (activeIndex - 1 + currentResults.length) % currentResults.length; highlight(activeIndex); }
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && currentResults[activeIndex]) {
        location.href = base + currentResults[activeIndex].url;
      }
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
})();
