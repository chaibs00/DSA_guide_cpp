/* ==========================================================================
   layout.js — injects topbar + collapsible sidebar tree + footer from
   layout-data.js, handles theme, mobile drawer, and the "on this page" TOC.
   Expects a global `BASE` string (computed per page in <head>) pointing to
   the site root, e.g. "" on index.html, "../../" on pages/cpp/basics.html.

   Internal links are written as data-href="pages/..." (path from site root)
   and resolved to real hrefs below — this is what makes nesting work.
   ========================================================================== */

(function () {
  const root = document.documentElement;
  const base = typeof BASE !== "undefined" ? BASE : "";

  // Full path, with a trailing "/" normalised to "/index.html" so that
  // /pages/structures/ and /pages/structures/index.html compare equal.
  const currentPath = (function () {
    let p = location.pathname;
    if (p.endsWith("/")) p += "index.html";
    return p;
  })();

  // Match on the full root-relative url, not just the filename — there are
  // many index.html files now and .pop() would match the wrong one.
  const isActive = (url) => !!url && currentPath.endsWith("/" + url);

  // ---------- resolve internal links ----------
  document.querySelectorAll("[data-href]").forEach((a) => {
    a.setAttribute("href", base + a.dataset.href);
  });

  // ---------- theme ----------
  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("dsa-theme", theme);
  }
  const savedTheme = localStorage.getItem("dsa-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

  // ---------- topbar ----------
  const topbarRoot = document.getElementById("topbar-root");
  if (topbarRoot) {
    topbarRoot.innerHTML = `
      <button class="menu-btn" id="menu-btn" aria-label="Toggle navigation">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
      <a class="topbar-brand" href="${base}index.html" aria-label="DSA guide — home">
        <span class="brand-mark">
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <rect x="5"  y="35" width="30" height="30" rx="6" fill="var(--data)"/>
            <rect x="40" y="35" width="30" height="30" rx="6" fill="var(--pointer)"/>
            <rect x="75" y="35" width="30" height="30" rx="6" fill="var(--data)"/>
          </svg>
        </span>
        <span class="brand-text"><span class="brand-dsa">DSA</span><span class="brand-sub">_guide</span></span>
      </a>
      <div class="topbar-spacer"></div>
      <button class="search-trigger" id="search-trigger">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
        <span class="search-label">Search docs…</span>
        <kbd>Ctrl K</kbd>
      </button>
      <a class="icon-btn" href="${base}index.html" aria-label="Home" id="home-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/></svg>
      </a>
      <button class="icon-btn" id="theme-toggle" aria-label="Toggle theme">
        <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
        <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>
      </button>
      <a class="icon-btn" href="https://github.com/" target="_blank" rel="noopener" aria-label="View on GitHub" id="github-link">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.55-3.88-1.55-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 015.8 0c2.2-1.5 3.18-1.18 3.18-1.18.63 1.6.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.45-2.71 5.42-5.29 5.71.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.2.67.8.56A10.53 10.53 0 0023.5 12.03C23.5 5.66 18.35.5 12 .5z"/></svg>
      </a>
    `;
    document.getElementById("theme-toggle").addEventListener("click", () => {
      applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  // ---------- sidebar (recursive collapsible tree) ----------
  const sidebarRoot = document.getElementById("sidebar-root");
  if (sidebarRoot) {
    // Find the path of nodes (by reference) leading to the active leaf,
    // so we know which containers to auto-expand.
    function findActivePath(nodes) {
      for (const node of nodes) {
        if (isActive(node.url)) return [node];
        if (node.children) {
          const sub = findActivePath(node.children);
          if (sub) return [node, ...sub];
        }
      }
      return null;
    }
    const activePath = findActivePath(NAV) || [];

    function chevronSvg() {
      return `<svg class="chev" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 6l6 6-6 6"/></svg>`;
    }

    function renderNode(node, depth) {
      const isActiveLeaf = isActive(node.url);
      const isOpen = activePath.includes(node);
      const indent = 10 + depth * 14;

      // if (node.soon && !node.url) {
      //   return `<div class="nav-row" style="padding-left:${indent}px">
      //     <span class="nav-link soon">${node.title}<span class="soon-tag">soon</span></span>
      //   </div>`;
      // }
      if (node.soon) {
        return `<div class="nav-row" style="padding-left:${indent}px">
          <span class="nav-link soon">${node.title}<span class="soon-tag">soon</span></span>
        </div>`;
      }

      if (!node.url) {
        // Pure grouping label — always visible, not collapsible.
        let html = `<div class="nav-section-title" style="padding-left:${indent}px">${node.title}</div>`;
        if (node.children) {
          node.children.forEach((child) => { html += renderNode(child, depth); });
        }
        return html;
      }

      const hasChildren = node.children && node.children.length;
      const nodeId = "n-" + node.url.replace(/[^a-z0-9]/gi, "-");

      let html = `<div class="nav-row" style="padding-left:${indent}px">
        <a class="nav-link${isActiveLeaf ? " active" : ""}" href="${base}${node.url}">${node.title}</a>`;
      if (hasChildren) {
        html += `<button class="nav-chevron${isOpen ? " open" : ""}" data-target="${nodeId}" aria-label="Expand ${node.title}">${chevronSvg()}</button>`;
      }
      html += `</div>`;

      if (hasChildren) {
        html += `<div class="nav-children${isOpen ? " open" : ""}" id="${nodeId}">`;
        node.children.forEach((child) => { html += renderNode(child, depth + 1); });
        html += `</div>`;
      }
      return html;
    }

    let sidebarHtml = "";
    NAV.forEach((node) => { sidebarHtml += renderNode(node, 0); });
    sidebarRoot.innerHTML = sidebarHtml;

    sidebarRoot.addEventListener("click", (e) => {
      const chevBtn = e.target.closest(".nav-chevron");
      if (chevBtn) {
        e.preventDefault();
        const target = document.getElementById(chevBtn.dataset.target);
        chevBtn.classList.toggle("open");
        target.classList.toggle("open");
      }
    });
  }

  // ---------- footer ----------
  const footerRoot = document.getElementById("footer-root");
  if (footerRoot) {
    const year = new Date().getFullYear();
    footerRoot.innerHTML = `
      <div class="site-footer">
        <p>© ${year} ${FOOTER_NAME}. All rights reserved.</p>
      </div>
    `;
  }

  // ---------- mobile drawer ----------
  const menuBtn = document.getElementById("menu-btn");
  const sidebar = document.querySelector(".sidebar");
  const scrim = document.querySelector(".scrim");
  function closeDrawer() {
    sidebar && sidebar.classList.remove("open");
    scrim && scrim.classList.remove("open");
  }
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      scrim.classList.toggle("open");
    });
  }
  if (scrim) scrim.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDrawer(); });
  if (sidebarRoot) {
    sidebarRoot.addEventListener("click", (e) => {
      if (e.target.matches(".nav-link:not(.soon)")) closeDrawer();
    });
  }

  // ---------- on-this-page TOC ----------
  const tocRoot = document.getElementById("toc-root");
  const article = document.querySelector("article.doc");
  if (tocRoot && article) {
    const headings = article.querySelectorAll("h2, h3");
    if (headings.length > 2) {
      let tocHtml = `<div class="toc-title">On this page</div><ul>`;
      headings.forEach((h) => {
        if (!h.id) {
          h.id = h.textContent.toLowerCase().trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-");
        }
        const cls = h.tagName === "H3" ? "sub" : "";
        tocHtml += `<li><a class="${cls}" href="#${h.id}" data-target="${h.id}">${h.textContent}</a></li>`;
      });
      tocHtml += `</ul>`;
      tocRoot.innerHTML = tocHtml;

      const tocLinks = tocRoot.querySelectorAll("a");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const link = tocRoot.querySelector(`a[data-target="${entry.target.id}"]`);
            if (!link) return;
            if (entry.isIntersecting) {
              tocLinks.forEach((l) => l.classList.remove("active"));
              link.classList.add("active");
            }
          });
        },
        { rootMargin: "-100px 0px -70% 0px" }
      );
      headings.forEach((h) => observer.observe(h));
    }
  }
})();