<h1>🧩 LeetCode Solutions</h1>

<p align="center">
Selected LeetCode problems solved in <b>C++</b>, organized to follow the guide's structure.<br>
Each folder has a <code>README.md</code> (summary, approaches, complexity) and the <code>.cpp</code> solution(s).
</p>

<p align="center">
<img src="https://img.shields.io/badge/Easy-00B8A3?style=flat-square" alt="Easy">
<img src="https://img.shields.io/badge/Medium-FFC01E?style=flat-square" alt="Medium">
<img src="https://img.shields.io/badge/Hard-FF375F?style=flat-square" alt="Hard">
</p>

<br>

## Linear Data Structures

<details open>
<summary><img src="https://img.shields.io/badge/Arrays-2563EB?style=for-the-badge" alt="Arrays"> <b>(27)</b></summary>

<div align="center">

| # | Problem | LeetCode | Difficulty | Pattern | Folder |
|:-:|:-------:|:--------:|:----------:|:-------:|:------:|
| 1 | Two Sum | [![LeetCode](https://img.shields.io/badge/LeetCode-1-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/two-sum/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Hash map` | [📂 0001-two-sum](leetcode/0001-two-sum/problem.md) |
| 2 | Remove Duplicates from Sorted Array | [![LeetCode](https://img.shields.io/badge/LeetCode-26-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Two pointers · In-place` | [📂 0026-remove-duplicates-from-sorted-array](leetcode/0026-remove-duplicates-from-sorted-array/problem.md) |
| 3 | Merge Sorted Array | [![LeetCode](https://img.shields.io/badge/LeetCode-88-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/merge-sorted-array/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Two pointers · Merge from back` | [📂 0088-merge-sorted-array](leetcode/0088-merge-sorted-array/problem.md) |
| 4 | Best Time to Buy and Sell Stock | [![LeetCode](https://img.shields.io/badge/LeetCode-121-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Greedy · Running min` | [📂 0121-best-time-to-buy-and-sell-stock](leetcode/0121-best-time-to-buy-and-sell-stock/problem.md) |
| 5 | Majority Element | [![LeetCode](https://img.shields.io/badge/LeetCode-169-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/majority-element/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Boyer–Moore voting` | [📂 0169-majority-element](leetcode/0169-majority-element/problem.md) |
| 6 | Missing Number | [![LeetCode](https://img.shields.io/badge/LeetCode-268-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/missing-number/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Math · XOR` | [📂 0268-missing-number](leetcode/0268-missing-number/problem.md) |
| 7 | Move Zeroes | [![LeetCode](https://img.shields.io/badge/LeetCode-283-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/move-zeroes/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Two pointers · In-place` | [📂 0283-move-zeroes](leetcode/0283-move-zeroes/problem.md) |
| 8 | Find All Numbers Disappeared in an Array | [![LeetCode](https://img.shields.io/badge/LeetCode-448-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `In-place · Index marking` | [📂 0448-find-all-numbers-disappeared-in-an-array](leetcode/0448-find-all-numbers-disappeared-in-an-array/problem.md) |
| 9 | Max Consecutive Ones | [![LeetCode](https://img.shields.io/badge/LeetCode-485-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/max-consecutive-ones/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Counting` | [📂 0485-max-consecutive-ones](leetcode/0485-max-consecutive-ones/problem.md) |
| 10 | Squares of a Sorted Array | [![LeetCode](https://img.shields.io/badge/LeetCode-977-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/squares-of-a-sorted-array/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Two pointers · Opposite ends` | [📂 0977-squares-of-a-sorted-array](leetcode/0977-squares-of-a-sorted-array/problem.md) |
| 11 | Running Sum of 1d Array | [![LeetCode](https://img.shields.io/badge/LeetCode-1480-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/running-sum-of-1d-array/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Prefix sum` | [📂 1480-running-sum-of-1d-array](leetcode/1480-running-sum-of-1d-array/problem.md) |
| 12 | Container With Most Water | [![LeetCode](https://img.shields.io/badge/LeetCode-11-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/container-with-most-water/) | ![Medium](https://img.shields.io/badge/Medium-FFC01E?style=flat-square) | `Two pointers · Greedy` | [📂 0011-container-with-most-water](leetcode/0011-container-with-most-water/problem.md) |
| 13 | 3Sum | [![LeetCode](https://img.shields.io/badge/LeetCode-15-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/3sum/) | ![Medium](https://img.shields.io/badge/Medium-FFC01E?style=flat-square) | `Sorting · Two pointers` | [📂 0015-3sum](leetcode/0015-3sum/problem.md) |
| 14 | Maximum Subarray | [![LeetCode](https://img.shields.io/badge/LeetCode-53-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/maximum-subarray/) | ![Medium](https://img.shields.io/badge/Medium-FFC01E?style=flat-square) | `Kadane's algorithm` | [📂 0053-maximum-subarray](leetcode/0053-maximum-subarray/problem.md) |
| 15 | Spiral Matrix | [![LeetCode](https://img.shields.io/badge/LeetCode-54-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/spiral-matrix/) | ![Medium](https://img.shields.io/badge/Medium-FFC01E?style=flat-square) | `Matrix traversal` | [📂 0054-spiral-matrix](leetcode/0054-spiral-matrix/problem.md) |
| 16 | Merge Intervals | [![LeetCode](https://img.shields.io/badge/LeetCode-56-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/merge-intervals/) | ![Medium](https://img.shields.io/badge/Medium-FFC01E?style=flat-square) | `Sorting · Intervals` | [📂 0056-merge-intervals](leetcode/0056-merge-intervals/problem.md) |
| 17 | Sort Colors | [![LeetCode](https://img.shields.io/badge/LeetCode-75-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/sort-colors/) | ![Medium](https://img.shields.io/badge/Medium-FFC01E?style=flat-square) | `Dutch flag · In-place` | [📂 0075-sort-colors](leetcode/0075-sort-colors/problem.md) |
| 18 | Longest Consecutive Sequence | [![LeetCode](https://img.shields.io/badge/LeetCode-128-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/longest-consecutive-sequence/) | ![Medium](https://img.shields.io/badge/Medium-FFC01E?style=flat-square) | `Hash set` | [📂 0128-longest-consecutive-sequence](leetcode/0128-longest-consecutive-sequence/problem.md) |
| 19 | Rotate Array | [![LeetCode](https://img.shields.io/badge/LeetCode-189-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/rotate-array/) | ![Medium](https://img.shields.io/badge/Medium-FFC01E?style=flat-square) | `In-place · Reversal` | [📂 0189-rotate-array](leetcode/0189-rotate-array/problem.md) |
| 20 | Minimum Size Subarray Sum | [![LeetCode](https://img.shields.io/badge/LeetCode-209-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/minimum-size-subarray-sum/) | ![Medium](https://img.shields.io/badge/Medium-FFC01E?style=flat-square) | `Sliding window` | [📂 0209-minimum-size-subarray-sum](leetcode/0209-minimum-size-subarray-sum/problem.md) |
| 21 | Product of Array Except Self | [![LeetCode](https://img.shields.io/badge/LeetCode-238-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/product-of-array-except-self/) | ![Medium](https://img.shields.io/badge/Medium-FFC01E?style=flat-square) | `Prefix · Suffix products` | [📂 0238-product-of-array-except-self](leetcode/0238-product-of-array-except-self/problem.md) |
| 22 | Find the Duplicate Number | [![LeetCode](https://img.shields.io/badge/LeetCode-287-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/find-the-duplicate-number/) | ![Medium](https://img.shields.io/badge/Medium-FFC01E?style=flat-square) | `Floyd's cycle detection` | [📂 0287-find-the-duplicate-number](leetcode/0287-find-the-duplicate-number/problem.md) |
| 23 | Subarray Sum Equals K | [![LeetCode](https://img.shields.io/badge/LeetCode-560-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/subarray-sum-equals-k/) | ![Medium](https://img.shields.io/badge/Medium-FFC01E?style=flat-square) | `Prefix sum · Hash map` | [📂 0560-subarray-sum-equals-k](leetcode/0560-subarray-sum-equals-k/problem.md) |
| 24 | Median of Two Sorted Arrays | [![LeetCode](https://img.shields.io/badge/LeetCode-4-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/median-of-two-sorted-arrays/) | ![Hard](https://img.shields.io/badge/Hard-FF375F?style=flat-square) | `Binary search · Partition` | [📂 0004-median-of-two-sorted-arrays](leetcode/0004-median-of-two-sorted-arrays/problem.md) |
| 25 | First Missing Positive | [![LeetCode](https://img.shields.io/badge/LeetCode-41-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/first-missing-positive/) | ![Hard](https://img.shields.io/badge/Hard-FF375F?style=flat-square) | `Cyclic sort · In-place` | [📂 0041-first-missing-positive](leetcode/0041-first-missing-positive/problem.md) |
| 26 | Trapping Rain Water | [![LeetCode](https://img.shields.io/badge/LeetCode-42-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/trapping-rain-water/) | ![Hard](https://img.shields.io/badge/Hard-FF375F?style=flat-square) | `Two pointers · Prefix max` | [📂 0042-trapping-rain-water](leetcode/0042-trapping-rain-water/problem.md) |
| 27 | Sliding Window Maximum | [![LeetCode](https://img.shields.io/badge/LeetCode-239-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/sliding-window-maximum/) | ![Hard](https://img.shields.io/badge/Hard-FF375F?style=flat-square) | `Sliding window · Monotonic deque` | [📂 0239-sliding-window-maximum](leetcode/0239-sliding-window-maximum/problem.md) |


</div>

</details>

<br>

<details>
<summary><img src="https://img.shields.io/badge/Strings-06B6D4?style=for-the-badge" alt="Strings"> <b>(3)</b></summary>

<div align="center">

| # | Problem | LeetCode | Difficulty | Pattern | Folder |
|:-:|:-------:|:--------:|:----------:|:-------:|:------:|
| 1 | Valid Palindrome | [![LeetCode](https://img.shields.io/badge/LeetCode-125-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/valid-palindrome/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Two pointers` | [📂 0125-valid-palindrome](leetcode/0125-valid-palindrome/problem.md) |
| 2 | Valid Anagram | [![LeetCode](https://img.shields.io/badge/LeetCode-242-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/valid-anagram/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Counting · Hash map` | [📂 0242-valid-anagram](leetcode/0242-valid-anagram/problem.md) |
| 3 | Longest Substring Without Repeating Characters | [![LeetCode](https://img.shields.io/badge/LeetCode-3-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | ![Medium](https://img.shields.io/badge/Medium-FFC01E?style=flat-square) | `Sliding window · Hash set` | [📂 0003-longest-substring-without-repeating-characters](leetcode/0003-longest-substring-without-repeating-characters/problem.md) |

</div>

</details>

<br>

<details>
<summary><img src="https://img.shields.io/badge/Linked_List-8B5CF6?style=for-the-badge" alt="Linked List"> <b>(4)</b></summary>

### Singly Linked list

<div align="center">

| # | Problem | LeetCode | Difficulty | Pattern | Folder |
|:-:|:-------:|:--------:|:----------:|:-------:|:------:|
| 1 | Merge Two Sorted Lists | [![LeetCode](https://img.shields.io/badge/LeetCode-21-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/merge-two-sorted-lists/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Dummy node · Merge` | [📂 0021-merge-two-sorted-lists](leetcode/0021-merge-two-sorted-lists/problem.md) |
| 2 | Linked List Cycle | [![LeetCode](https://img.shields.io/badge/LeetCode-141-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/linked-list-cycle/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Fast & slow pointers` | [📂 0141-linked-list-cycle](leetcode/0141-linked-list-cycle/problem.md) |
| 3 | Reverse Linked List | [![LeetCode](https://img.shields.io/badge/LeetCode-206-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/reverse-linked-list/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Pointer reversal` | [📂 0206-reverse-linked-list](leetcode/0206-reverse-linked-list/problem.md) |

</div>

### Doubly Linked list

<div align="center">

| # | Problem | LeetCode | Difficulty | Pattern | Folder |
|:-:|:-------:|:--------:|:----------:|:-------:|:------:|
| 1 | Reverse Linked List | [![LeetCode](https://img.shields.io/badge/LeetCode-206-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/reverse-linked-list/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Pointer reversal` | [📂 0206-reverse-linked-list](leetcode/0206-reverse-linked-list/problem.md) |

</div>

</details>

<br>

<details>
<summary><img src="https://img.shields.io/badge/Stack-6366F1?style=for-the-badge" alt="Stack"> <b>(3)</b></summary>

<div align="center">

| # | Problem | LeetCode | Difficulty | Pattern | Folder |
|:-:|:-------:|:--------:|:----------:|:-------:|:------:|
| 1 | Valid Parentheses | [![LeetCode](https://img.shields.io/badge/LeetCode-20-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/valid-parentheses/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Stack matching` | [📂 0020-valid-parentheses](leetcode/0020-valid-parentheses/problem.md) |
| 2 | Min Stack | [![LeetCode](https://img.shields.io/badge/LeetCode-155-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/min-stack/) | ![Medium](https://img.shields.io/badge/Medium-FFC01E?style=flat-square) | `Auxiliary stack` | [📂 0155-min-stack](leetcode/0155-min-stack/problem.md) |
| 3 | Daily Temperatures | [![LeetCode](https://img.shields.io/badge/LeetCode-739-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/daily-temperatures/) | ![Medium](https://img.shields.io/badge/Medium-FFC01E?style=flat-square) | `Monotonic stack` | [📂 0739-daily-temperatures](leetcode/0739-daily-temperatures/problem.md) |

</div>

</details>

<br>

<details>
<summary><img src="https://img.shields.io/badge/Queue-0EA5E9?style=for-the-badge" alt="Queue"> <b>(3)</b></summary>

<div align="center">

| # | Problem | LeetCode | Difficulty | Pattern | Folder |
|:-:|:-------:|:--------:|:----------:|:-------:|:------:|
| 1 | Implement Stack using Queues | [![LeetCode](https://img.shields.io/badge/LeetCode-225-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/implement-stack-using-queues/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Queue rotation` | [📂 0225-implement-stack-using-queues](leetcode/0225-implement-stack-using-queues/problem.md) |
| 2 | Implement Queue using Stacks | [![LeetCode](https://img.shields.io/badge/LeetCode-232-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/implement-queue-using-stacks/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Two stacks` | [📂 0232-implement-queue-using-stacks](leetcode/0232-implement-queue-using-stacks/problem.md) |
| 3 | Number of Recent Calls | [![LeetCode](https://img.shields.io/badge/LeetCode-933-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/number-of-recent-calls/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Sliding window queue` | [📂 0933-number-of-recent-calls](leetcode/0933-number-of-recent-calls/problem.md) |

</div>

</details>

<br>

## Non-Linear Data Structures

<details>
<summary><img src="https://img.shields.io/badge/Hash_Table-10B981?style=for-the-badge" alt="Hash Table"> <b>(3)</b></summary>

<div align="center">

| # | Problem | LeetCode | Difficulty | Pattern | Folder |
|:-:|:-------:|:--------:|:----------:|:-------:|:------:|
| 1 | Contains Duplicate | [![LeetCode](https://img.shields.io/badge/LeetCode-217-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/contains-duplicate/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Hash set` | [📂 0217-contains-duplicate](leetcode/0217-contains-duplicate/problem.md) |
| 2 | Group Anagrams | [![LeetCode](https://img.shields.io/badge/LeetCode-49-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/group-anagrams/) | ![Medium](https://img.shields.io/badge/Medium-FFC01E?style=flat-square) | `Hash map · Grouping key` | [📂 0049-group-anagrams](leetcode/0049-group-anagrams/problem.md) |
| 3 | Top K Frequent Elements | [![LeetCode](https://img.shields.io/badge/LeetCode-347-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/top-k-frequent-elements/) | ![Medium](https://img.shields.io/badge/Medium-FFC01E?style=flat-square) | `Hash map · Bucket sort` | [📂 0347-top-k-frequent-elements](leetcode/0347-top-k-frequent-elements/problem.md) |

</div>

</details>

<br>

<details>
<summary><img src="https://img.shields.io/badge/Trees-22C55E?style=for-the-badge" alt="Trees"> <b>(3)</b></summary>

<div align="center">

| # | Problem | LeetCode | Difficulty | Pattern | Folder |
|:-:|:-------:|:--------:|:----------:|:-------:|:------:|
| 1 | Maximum Depth of Binary Tree | [![LeetCode](https://img.shields.io/badge/LeetCode-104-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `DFS` | [📂 0104-maximum-depth-of-binary-tree](leetcode/0104-maximum-depth-of-binary-tree/problem.md) |
| 2 | Invert Binary Tree | [![LeetCode](https://img.shields.io/badge/LeetCode-226-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/invert-binary-tree/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `DFS` | [📂 0226-invert-binary-tree](leetcode/0226-invert-binary-tree/problem.md) |
| 3 | Binary Tree Level Order Traversal | [![LeetCode](https://img.shields.io/badge/LeetCode-102-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/binary-tree-level-order-traversal/) | ![Medium](https://img.shields.io/badge/Medium-FFC01E?style=flat-square) | `BFS` | [📂 0102-binary-tree-level-order-traversal](leetcode/0102-binary-tree-level-order-traversal/problem.md) |

</div>

</details>

<br>

<details>
<summary><img src="https://img.shields.io/badge/Graphs-14B8A6?style=for-the-badge" alt="Graphs"> <b>(3)</b></summary>

<div align="center">

| # | Problem | LeetCode | Difficulty | Pattern | Folder |
|:-:|:-------:|:--------:|:----------:|:-------:|:------:|
| 1 | Flood Fill | [![LeetCode](https://img.shields.io/badge/LeetCode-733-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/flood-fill/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `DFS on grid` | [📂 0733-flood-fill](leetcode/0733-flood-fill/problem.md) |
| 2 | Number of Islands | [![LeetCode](https://img.shields.io/badge/LeetCode-200-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/number-of-islands/) | ![Medium](https://img.shields.io/badge/Medium-FFC01E?style=flat-square) | `DFS · Connected components` | [📂 0200-number-of-islands](leetcode/0200-number-of-islands/problem.md) |
| 3 | Course Schedule | [![LeetCode](https://img.shields.io/badge/LeetCode-207-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/course-schedule/) | ![Medium](https://img.shields.io/badge/Medium-FFC01E?style=flat-square) | `Topological sort` | [📂 0207-course-schedule](leetcode/0207-course-schedule/problem.md) |

</div>

</details>

<br>

## Recursion

<details>
<summary><img src="https://img.shields.io/badge/Recursion-EC4899?style=for-the-badge" alt="Recursion"> <b>(3)</b></summary>

<div align="center">

| # | Problem | LeetCode | Difficulty | Pattern | Folder |
|:-:|:-------:|:--------:|:----------:|:-------:|:------:|
| 1 | Climbing Stairs | [![LeetCode](https://img.shields.io/badge/LeetCode-70-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/climbing-stairs/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Memoization · DP` | [📂 0070-climbing-stairs](leetcode/0070-climbing-stairs/problem.md) |
| 2 | Fibonacci Number | [![LeetCode](https://img.shields.io/badge/LeetCode-509-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/fibonacci-number/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Recursion · Memoization` | [📂 0509-fibonacci-number](leetcode/0509-fibonacci-number/problem.md) |
| 3 | Subsets | [![LeetCode](https://img.shields.io/badge/LeetCode-78-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/subsets/) | ![Medium](https://img.shields.io/badge/Medium-FFC01E?style=flat-square) | `Backtracking` | [📂 0078-subsets](leetcode/0078-subsets/problem.md) |

</div>

</details>

<br>

## Algorithms

<details>
<summary><img src="https://img.shields.io/badge/Searching-F97316?style=for-the-badge" alt="Searching"> <b>(3)</b></summary>

<div align="center">

| # | Problem | LeetCode | Difficulty | Pattern | Folder |
|:-:|:-------:|:--------:|:----------:|:-------:|:------:|
| 1 | Search Insert Position | [![LeetCode](https://img.shields.io/badge/LeetCode-35-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/search-insert-position/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Binary search · Lower bound` | [📂 0035-search-insert-position](leetcode/0035-search-insert-position/problem.md) |
| 2 | Binary Search | [![LeetCode](https://img.shields.io/badge/LeetCode-704-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/binary-search/) | ![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square) | `Binary search` | [📂 0704-binary-search](leetcode/0704-binary-search/problem.md) |
| 3 | Search in Rotated Sorted Array | [![LeetCode](https://img.shields.io/badge/LeetCode-33-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/search-in-rotated-sorted-array/) | ![Medium](https://img.shields.io/badge/Medium-FFC01E?style=flat-square) | `Modified binary search` | [📂 0033-search-in-rotated-sorted-array](leetcode/0033-search-in-rotated-sorted-array/problem.md) |

</div>

</details>