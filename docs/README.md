# DSA_guide — site source

A plain HTML/CSS/JS docs site, built to run on GitHub Pages with no build step.

```bash
pages/
  cpp/          starter.html  basics.html  intermediate.html  advanced.html
  concepts/     complexity.html  pointers.html
  structures/   index.html  linear/  non-linear/
                linear/index.html  arrays.html  strings.html  linked-lists.html  stack.html  queue.html
                non-linear/index.html  trees.html  graphs.html
  algorithms/   index.html  searching.html  sorting.html
  patterns.html
```

## The navigation model

The sidebar is a tree, but the site is more than a sidebar: some categories are also **hub pages** — a page whose only job is to show a card grid linking to its children. Clicking a category's name in the sidebar goes to its hub page; clicking the little chevron next to it expands/collapses its children in the sidebar without navigating anywhere.

Current taxonomy:

```
Getting started
  C++ starter
Core concepts
  Complexity analysis
  Pointers & memory
Data structures            <- hub page
  Linear data structures   <- hub page
    Arrays, Strings, Linked list, Stack, Queue
  Non-linear data structures <- hub page
    Tree, Graphs
Algorithms                 <- hub page
  Search algorithms
  Sorting
Common patterns            <- hub page (no children yet)
```

"Getting started" and "Core concepts" are plain grouping labels (no hub page — too few children to need one). Everything else with children is a hub.

The sidebar is collapsed by default; it auto-expands whichever branch contains the page you're currently on, and you can expand/collapse any branch manually by clicking its chevron.

## Structure

```
index.html                   Homepage — intro block + top-level entry cards
404.html
pages/
  _template.html              Copy this to start a new LEAF page
  data-structures.html        Hub — Data structures
  linear-structures.html      Hub — Linear data structures
  non-linear-structures.html  Hub — Non-linear data structures
  algorithms.html             Hub — Algorithms
  patterns.html                Hub — Common patterns (coming soon)
  complexity.html              Leaf — real content
  pointers.html                 Leaf — real content
  arrays.html                   Leaf — real content
  cpp-starter.html               (stub)
  strings.html, linked-lists.html, stack.html, queue.html,
  tree.html, graphs.html, searching.html                 (stubs)
  sorting.html                  Leaf — real content
assets/
  css/style.css                Entire design system (tokens, layout, components)
  js/layout-data.js            NAV tree + SEARCH_INDEX + SITE_NAME/FOOTER_NAME — single source of truth
  js/layout.js                 Renders topbar/sidebar tree, theme toggle, mobile menu, TOC, footer
  js/search.js                 Client-side search modal
  js/code.js                   Copy button + syntax highlighting init
```

Every page is a flat file under `/pages` — no nested folders — even though the *navigation* is nested. The hierarchy lives in `layout-data.js`, not in the file paths.

## Adding a new leaf page (e.g. a new algorithm)

1. Copy `pages/_template.html` to `pages/your-page.html`.
2. Fill in the title, breadcrumb (`.doc-kicker`, see existing pages for the `<a>` + `<span class="sep">/</span>` pattern), heading, and body.
3. In `assets/js/layout-data.js`: add a node to the right spot in `NAV` (as a child of its category), and an entry to `SEARCH_INDEX`.
4. Add the card for it on its parent's hub page (card-grid — copy an existing `.topic-card` block), and remove the `soon-tag` from that card once the content is real.
5. Fix the prev/next links at the bottom of your new page and its two neighbors so the reading order stays connected.

## Adding a new hub page (a new category with its own sub-items)

Same as above, but the page's body is just a lede paragraph + a `.card-grid` of `.topic-card` links to its children — see `pages/data-structures.html` for the simplest example. Give it `children` in `layout-data.js` so the sidebar shows the chevron and nests correctly.

## Design system reference

Everything lives in `assets/css/style.css` as CSS custom properties.

- **Two accent colors carry meaning throughout the site:** teal (`--data`) for values/data, amber (`--pointer`) for pointers/references/indices. Use `.text-data` / `.text-pointer` inline, or the same variables inside diagram SVGs.
- **Fonts:** IBM Plex Mono for headings/labels, IBM Plex Sans for body text.
- **Dark/light mode** is automatic (`prefers-color-scheme`) with a manual toggle in the topbar; persists in `localStorage`.
- **Reusable components:** `.callout` (`.tip`/`.note`/`.warn`), `.code-block` (copy button + hljs), `.doc-table`, `.diagram`, `.badge` (`.good`/`.mid`/`.bad`), `.card-grid` + `.topic-card` (used on the homepage and every hub page).
- **Footer**: a single `<div id="footer-root"></div>` on every page, filled in by `layout.js` from the `FOOTER_NAME` constant in `layout-data.js`. Change the name there once — it updates everywhere.

## Search

`assets/js/search.js` matches against title/section/keywords in `SEARCH_INDEX`, not full page text — fast, dependency-free, no build step. Trade-off: it won't find an arbitrary phrase buried in a page body.

## Deploying to GitHub Pages

1. Push this folder to the root of your repository (or into a `/docs` folder).
2. **Settings → Pages → Build and deployment → Deploy from a branch.**
3. Pick the branch and `/ (root)` or `/docs`, matching where you put these files.
4. Save — GitHub gives you a `https://<username>.github.io/<repo>/` URL shortly after.

No build process — whatever's in the repo is exactly what gets served.

## Notes / known limitations

- The homepage's typing-animation banner (`readme-typing-svg.herokuapp.com`) is on a Heroku free-tier app; Heroku sunset free dynos in 2022, so double-check it still renders once the site is live. If it doesn't, swap the `<img>` in `index.html` for a static line or another typing-svg host.
- `FOOTER_NAME` in `layout-data.js` is currently a placeholder — update it with your real name/handle when ready.
- Search indexes titles and short keyword blurbs, not full body text.
- Several leaf pages (strings, stack, queue, tree, graphs, searching, cpp-starter) and the "Common patterns" hub are placeholders — replace using the template once that content is written.
