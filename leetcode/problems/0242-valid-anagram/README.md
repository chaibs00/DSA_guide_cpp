<sub>[🏠 Home](../../README.md) › [All problems](../README.md) › **0242**</sub>

# 0242 · Valid Anagram

<!-- tags:start -->
<p>
  <img src="https://img.shields.io/badge/Difficulty-Easy-00B8A3?style=for-the-badge" />
  <a href="../../topics/arrays-and-strings/hashing.md"><img src="https://img.shields.io/badge/Arrays%20%26%20Strings-Hashing-1F8F86?style=for-the-badge" /></a>
  <a href="../../topics/arrays-and-strings/sorting.md"><img src="https://img.shields.io/badge/Arrays%20%26%20Strings-Sorting%20first-1F8F86?style=for-the-badge" /></a>
  <a href="https://leetcode.com/problems/valid-anagram/"><img src="https://img.shields.io/badge/LeetCode-Open-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" /></a>
</p>
<!-- tags:end -->

## 📝 Problem (in short)
Return true if two strings contain exactly the same letters with the same counts.

## 💡 Approach
**Hashing:** a `count[26]` array — +1 for each letter of `s`, −1 for each letter of `t`; all zeros means anagram.  
**Sorting:** sort both strings and compare.

## ⏱️ Complexity

| Approach | Time | Space |
|:--|:-:|:-:|
| Sorting | O(n log n) | O(1) |
| **Count array** | **O(n)** | **O(1)** |

## 💻 Code
[`solution.cpp`](./solution.cpp)
