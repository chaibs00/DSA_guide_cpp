<sub>[🏠 Home](../../README.md) › [All problems](../README.md) › **0001**</sub>

# 0001 · Two Sum

<!-- tags:start -->
<p>
  <img src="https://img.shields.io/badge/Difficulty-Easy-00B8A3?style=for-the-badge" />
  <a href="../../topics/arrays-and-strings/hashing.md"><img src="https://img.shields.io/badge/Arrays%20%26%20Strings-Hashing-1F8F86?style=for-the-badge" /></a>
  <a href="https://leetcode.com/problems/two-sum/"><img src="https://img.shields.io/badge/LeetCode-Open-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" /></a>
</p>
<!-- tags:end -->

## 📝 Problem (in short)
Given an array and a target, return the indices of the two numbers that add up to the target. Exactly one answer exists.

## 💡 Approach
For each `x`, the partner needed is `target - x`. Keep a map `value → index`; if the partner is already in it, return both indices.

## 🔁 Walkthrough
`nums = [2, 7, 11, 15]`, `target = 9`

| i | nums[i] | need | map before | found? |
|:-:|:-:|:-:|:--|:-:|
| 0 | 2 | 7 | `{}` | ❌ |
| 1 | 7 | 2 | `{2:0}` | ✅ → `[0, 1]` |

## ⏱️ Complexity

| Approach | Time | Space |
|:--|:-:|:-:|
| Brute force | O(n²) | O(1) |
| **Hash map** | **O(n)** | **O(n)** |

## 💻 Code
[`solution.cpp`](./solution.cpp)

## 🔗 Related
- 0167 · Two Sum II
- 0015 · 3Sum
