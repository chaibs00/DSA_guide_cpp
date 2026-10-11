<sub>[🏠 Home](../../README.md) › [All problems](../README.md) › **0217**</sub>

# 0217 · Contains Duplicate

<!-- tags:start -->
<p>
  <img src="https://img.shields.io/badge/Difficulty-Easy-00B8A3?style=for-the-badge" />
  <a href="../../topics/arrays-and-strings/hashing.md"><img src="https://img.shields.io/badge/Arrays%20%26%20Strings-Hashing-1F8F86?style=for-the-badge" /></a>
  <a href="../../topics/arrays-and-strings/sorting.md"><img src="https://img.shields.io/badge/Arrays%20%26%20Strings-Sorting%20first-1F8F86?style=for-the-badge" /></a>
  <a href="https://leetcode.com/problems/contains-duplicate/"><img src="https://img.shields.io/badge/LeetCode-Open-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" /></a>
</p>
<!-- tags:end -->

## 📝 Problem (in short)
Return true if any value appears at least twice in the array.

## 💡 Approach
**Hashing:** insert into an `unordered_set`; if a value is already there, it's a duplicate.  
**Sorting:** after sorting, duplicates sit next to each other — compare neighbours.

## ⏱️ Complexity

| Approach | Time | Space |
|:--|:-:|:-:|
| Sorting | O(n log n) | O(1) |
| **Hash set** | **O(n)** | **O(n)** |

## 💻 Code
[`solution.cpp`](./solution.cpp)
