<sub>[🏠 Home](../../README.md) › [All problems](../README.md) › **1480**</sub>

# 1480 · Running Sum of 1d Array

<!-- tags:start -->
<p>
  <img src="https://img.shields.io/badge/Difficulty-Easy-00B8A3?style=for-the-badge" />
  <a href="../../topics/arrays-and-strings/prefix-sum.md"><img src="https://img.shields.io/badge/Arrays%20%26%20Strings-Prefix%20sum-1F8F86?style=for-the-badge" /></a>
  <a href="../../topics/arrays-and-strings/in-place.md"><img src="https://img.shields.io/badge/Arrays%20%26%20Strings-In--place%20modification-1F8F86?style=for-the-badge" /></a>
  <a href="https://leetcode.com/problems/running-sum-of-1d-array/"><img src="https://img.shields.io/badge/LeetCode-Open-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" /></a>
</p>
<!-- tags:end -->

## 📝 Problem (in short)
Return an array where each element is the sum of all elements up to and including that index.

## 💡 Approach
This *is* a prefix sum: `nums[i] += nums[i-1]`, done in place from left to right.

## ⏱️ Complexity

| Approach | Time | Space |
|:--|:-:|:-:|
| In place | O(n) | O(1) |

## 💻 Code
[`solution.cpp`](./solution.cpp)
