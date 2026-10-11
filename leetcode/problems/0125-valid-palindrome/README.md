<sub>[🏠 Home](../../README.md) › [All problems](../README.md) › **0125**</sub>

# 0125 · Valid Palindrome

<!-- tags:start -->
<p>
  <img src="https://img.shields.io/badge/Difficulty-Easy-00B8A3?style=for-the-badge" />
  <a href="../../topics/arrays-and-strings/two-pointers.md"><img src="https://img.shields.io/badge/Arrays%20%26%20Strings-Two%20pointers-1F8F86?style=for-the-badge" /></a>
  <a href="https://leetcode.com/problems/valid-palindrome/"><img src="https://img.shields.io/badge/LeetCode-Open-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" /></a>
</p>
<!-- tags:end -->

## 📝 Problem (in short)
Check whether a string is a palindrome after ignoring non-alphanumeric characters and case.

## 💡 Approach
Pointers at both ends; skip non-alphanumeric chars, compare lowercase versions, move inward.

## ⏱️ Complexity

| Approach | Time | Space |
|:--|:-:|:-:|
| Two pointers | O(n) | O(1) |

## 💻 Code
[`solution.cpp`](./solution.cpp)
