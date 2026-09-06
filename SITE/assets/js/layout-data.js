/* ==========================================================================
   Site navigation (tree) + search index — single source of truth.

   NAV node shape:
     { title, url?, children?, soon? }
   - A node with no `url` is a pure grouping label (e.g. "Getting started") —
     always shown, never collapsible, its children render directly under it.
   - A node WITH `url` and `children` is a hub page: clicking its title
     navigates to a card-grid page listing its children; a chevron next to
     it expands/collapses the children in the sidebar independently.
   - A node with `url` and no `children` is a normal leaf page.
   - `soon: true` renders as inactive text instead of a link (no page yet).

   To add a new page: add a node here, create the .html file in /pages
   (use pages/_template.html for leaves, pages/_hub-template.html for hubs),
   and add a matching entry to SEARCH_INDEX.
   ========================================================================== */

const SITE_NAME = "DSA guide";
const FOOTER_NAME = "CBS";

const NAV = [
  {
    title: "Getting started",
    children: [
      { title: "C++ starter", 
        url: "pages/00_cpp-starter.html",
        children: [
          { title: "Basics", url: "pages/01_cpp_basic.html" },
          { title: "Intermediate", url: "pages/02_cpp_inter.html" },
          { title: "Advanced", url: "pages/03_cpp_advanced.html" },
        ],
      },
    ],
  },

  {
    title: "Core concepts",
    children: [
      { title: "Complexity analysis", url: "pages/complexity.html" },
      { title: "Pointers & memory", url: "pages/pointers.html" },
    ],
  },

  {
    title: "Explore the guide",
    children: [
      {
        title: "Data structures",
        url: "pages/data-structures.html",
        children: [
          {
            title: "Linear data structures",
            url: "pages/linear-structures.html",
            children: [
              { title: "Arrays", url: "pages/arrays.html" },
              { title: "Strings", url: "pages/strings.html" },
              { title: "Linked list", url: "pages/linked-lists.html" },
              { title: "Stack", url: "pages/stack.html" },
              { title: "Queue", url: "pages/queue.html" },
            ],
          },

          {
            title: "Non-linear data structures",
            url: "pages/non-linear-structures.html",
            children: [
              { title: "Trees", url: "pages/tree.html" },
              { title: "Graphs", url: "pages/graphs.html" },
            ],
          },
        ],
      },

      {
        title: "Algorithms",
        url: "pages/algorithms.html",
        children: [
          { title: "Search algorithms", url: "pages/searching.html" },
          { title: "Sorting", url: "pages/sorting.html" },
        ],
      },

      {
        title: "Common patterns",
        url: "pages/patterns.html",
      },
    ],
  },
];

// Flat index used by search. `body` is a short list of keywords/snippets,
// not full page text — search matches title, section, and body.
const SEARCH_INDEX = [
  { title: "Introduction", section: "Home", url: "index.html",
    body: "home overview dsa_guide learning path what this guide covers" },
  { title: "C++ Introduction", section: "Getting started", url: "pages/00_cpp-starter.html",
    body: "variables types control flow functions syntax refresher before dsa" },
  { title: "Complexity analysis", section: "Core concepts", url: "pages/complexity.html",
    body: "big o notation growth rate time space tradeoff" },
  { title: "Pointers & memory", section: "Core concepts", url: "pages/pointers.html",
    body: "pointer reference address dereference new delete stack heap memory management" },
  { title: "Data structures", section: "Data structures", url: "pages/data-structures.html",
    body: "overview linear non-linear structures" },
  { title: "Linear data structures", section: "Data structures", url: "pages/linear-structures.html",
    body: "arrays strings linked list stack queue sequential" },
  { title: "Arrays", section: "Linear data structures", url: "pages/arrays.html",
    body: "array vector static dynamic index contiguous memory capacity reallocation push_back" },
  { title: "Strings", section: "Linear data structures", url: "pages/strings.html",
    body: "std::string char array c-string null terminator substring" },
  { title: "Linked list", section: "Linear data structures", url: "pages/linked-lists.html",
    body: "singly linked list node next pointer head tail traversal insertion deletion" },
  { title: "Stack", section: "Linear data structures", url: "pages/stack.html",
    body: "lifo push pop top stack" },
  { title: "Queue", section: "Linear data structures", url: "pages/queue.html",
    body: "fifo enqueue dequeue front back queue" },
  { title: "Non-linear data structures", section: "Data structures", url: "pages/non-linear-structures.html",
    body: "tree graph hierarchical network" },
  { title: "Tree", section: "Non-linear data structures", url: "pages/tree.html",
    body: "binary tree node root leaf traversal" },
  { title: "Graphs", section: "Non-linear data structures", url: "pages/graphs.html",
    body: "graph vertex edge adjacency directed undirected" },
  { title: "Algorithms", section: "Algorithms", url: "pages/algorithms.html",
    body: "overview search sorting" },
  { title: "Search algorithms", section: "Algorithms", url: "pages/searching.html",
    body: "linear search binary search" },
  { title: "Sorting", section: "Algorithms", url: "pages/sorting.html",
    body: "bubble selection insertion merge quick heap sort complexity comparison" },
  { title: "Common patterns", section: "Common patterns", url: "pages/patterns.html",
    body: "two pointers sliding window leetcode patterns" },
];
