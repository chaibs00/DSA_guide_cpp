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
      { title: "C++ starter", url: "pages/cpp/index.html",
        children: [
          { title: "Basics", url: "pages/cpp/basics.html" },
          { title: "Intermediate", url: "pages/cpp/intermediate.html" },
          { title: "Advanced", url: "pages/cpp/advanced.html" },
        ],
      },
    ],
  },
  {
    title: "Core concepts",
    children: [
      { title: "Complexity analysis", url: "pages/concepts/complexity.html" },
      { title: "Pointers & memory", url: "pages/concepts/pointers.html" },
      { title: "Recursion", url: "pages/concepts/recursion.html" },
    ],
  },
  {
    title: "Explore the guide",
    children: [
      {
        title: "Data structures", url: "pages/structures/index.html",
        children: [
          {
            title: "Linear data structures", url: "pages/structures/linear/index.html",
            children: [
              { title: "Arrays", url: "pages/structures/linear/arrays.html",
                children: [
                  { title: "Static arrays",  url: "pages/structures/linear/arrays-static.html" },
                  { title: "Dynamic arrays", url: "pages/structures/linear/arrays-dynamic.html" },
                ]
              },
              { title: "Strings", url: "pages/structures/linear/strings.html" },
              {
                title: "Linked lists", url: "pages/structures/linear/linked-lists.html",
                children: [
                  { title: "Singly linked lists", url: "pages/structures/linear/linked-lists-singly.html" },
                  { title: "Doubly linked lists", url: "pages/structures/linear/linked-lists-doubly.html", soon: true },
                ],
              },
              { title: "Stack", url: "pages/structures/linear/stack.html" },
              { title: "Queue", url: "pages/structures/linear/queue.html" },
            ],
          },
          {
            title: "Non-linear data structures", url: "pages/structures/non-linear/index.html",
            children: [
              { title: "Trees", url: "pages/structures/non-linear/trees.html" },
              { title: "Graphs", url: "pages/structures/non-linear/graphs.html" },
            ],
          },
        ],
      },
      {
        title: "Algorithms", url: "pages/algorithms/index.html",
        children: [
          { title: "Search algorithms", url: "pages/algorithms/searching.html" },
          { title: "Sorting", url: "pages/algorithms/sorting.html" },
        ],
      },
      { title: "Common patterns", url: "pages/patterns/index.html" },
    ],
  },
];

// Flat index used by search. `body` is a short list of keywords/snippets,
// not full page text — search matches title, section, and body.
const SEARCH_INDEX = [
  { title: "Introduction", section: "Home", url: "index.html",
    body: "home overview dsa_guide learning path what this guide covers" },
  { title: "C++ starter", section: "Getting started", url: "pages/cpp/index.html",
    body: "variables types control flow functions syntax refresher before dsa" },
  { title: "C++ basics", section: "Getting started", url: "pages/cpp/basics.html",
    body: "cin cout input data types operators conditionals loops functions templates" },
  { title: "C++ intermediate", section: "Getting started", url: "pages/cpp/intermediate.html",
    body: "references structs classes stl overloading" },
  { title: "C++ advanced", section: "Getting started", url: "pages/cpp/advanced.html",
    body: "templates lambdas smart pointers move semantics" },
  { title: "Complexity analysis", section: "Core concepts", url: "pages/concepts/complexity.html",
    body: "big o notation growth rate time space tradeoff" },
  { title: "Pointers & memory", section: "Core concepts", url: "pages/concepts/pointers.html",
    body: "pointer reference address dereference new delete stack heap memory management" },
  { title: "Recursion", section: "Core concepts", url: "pages/concepts/recursion.html",
  body: "recursion recursive base case call stack stack frame memoization fibonacci factorial backtracking depth" },
  { title: "Data structures", section: "Data structures", url: "pages/structures/index.html",
    body: "overview linear non-linear structures" },
  { title: "Linear data structures", section: "Data structures", url: "pages/structures/linear/index.html",
    body: "arrays strings linked list stack queue sequential comparison" },
  { title: "Arrays", section: "Linear data structures", url: "pages/structures/linear/arrays.html",
    body: "array contiguous memory index advantages downsides static dynamic cache" },
  { title: "Static arrays", section: "Arrays", url: "pages/structures/linear/arrays-static.html",
    body: "c-style array fixed size declaration initialization sizeof traversal bounds stack" },
  { title: "Dynamic arrays", section: "Arrays", url: "pages/structures/linear/arrays-dynamic.html",
    body: "vector push_back insert erase pop_back clear size capacity reserve iterator matrix 2d heap new delete" },
  { title: "Strings", section: "Linear data structures", url: "pages/structures/linear/strings.html",
    body: "std::string char array c-string null terminator substring" },
  { title: "Linked lists", section: "Linear data structures", url: "pages/structures/linear/linked-lists.html",
    body: "node next pointer nullptr singly doubly circular non-contiguous chain advantages" },
  { title: "Singly linked lists", section: "Linked lists", url: "pages/structures/linear/linked-lists-singly.html",
    body: "head tail struct node constructor traversal size insert front back position delete new delete" },
  { title: "Doubly linked lists", section: "Linked lists", url: "pages/structures/linear/linked-lists-doubly.html",
    body: "prev next two-way traversal doubly node" },
  { title: "Stack", section: "Linear data structures", url: "pages/structures/linear/stack.html",
    body: "lifo push pop top stack" },
  { title: "Queue", section: "Linear data structures", url: "pages/structures/linear/queue.html",
    body: "fifo enqueue dequeue front back queue" },
  { title: "Non-linear data structures", section: "Data structures", url: "pages/structures/non-linear/index.html",
    body: "tree graph hierarchical network heap hash table" },
  { title: "Trees", section: "Non-linear data structures", url: "pages/structures/non-linear/trees.html",
    body: "binary tree node root leaf traversal bst" },
  { title: "Graphs", section: "Non-linear data structures", url: "pages/structures/non-linear/graphs.html",
    body: "graph vertex edge adjacency directed undirected" },
  { title: "Algorithms", section: "Algorithms", url: "pages/algorithms/index.html",
    body: "overview search sorting" },
  { title: "Search algorithms", section: "Algorithms", url: "pages/algorithms/searching.html",
    body: "linear search binary search" },
  { title: "Sorting", section: "Algorithms", url: "pages/algorithms/sorting.html",
    body: "bubble selection insertion merge quick heap sort complexity comparison" },
  { title: "Common patterns", section: "Common patterns", url: "pages/patterns/index.html",
    body: "two pointers sliding window leetcode patterns" },
];