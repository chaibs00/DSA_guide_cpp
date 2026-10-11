<sub>[🏠 Home](../../README.md) › [All problems](../README.md) › **0485**</sub>

# 0485 · Max Consecutive Ones

<!-- tags:start -->
<p>
  <img src="https://img.shields.io/badge/Difficulty-Easy-00B8A3?style=for-the-badge" />
  <a href="../../topics/arrays-and-strings/basics.md"><img src="https://img.shields.io/badge/Arrays%20%26%20Strings-Traversal%20%26%20simulation-1F8F86?style=for-the-badge" /></a>
  <a href="https://leetcode.com/problems/max-consecutive-ones/"><img src="https://img.shields.io/badge/LeetCode-Open-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" /></a>
</p>
<!-- tags:end -->

## 📝 Problem (in short)
Given a binary array, return the length of the longest run of 1s.

## 💡 Approach
Walk once with a `current` streak: +1 on a 1, reset to 0 on a 0. Track the max seen.

## ⏱️ Complexity

| Approach | Time | Space |
|:--|:-:|:-:|
| One pass | O(n) | O(1) |

## 💻 Code
[`solution.cpp`](./solution.cpp)
