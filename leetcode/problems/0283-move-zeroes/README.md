<sub>[🏠 Home](../../README.md) › [All problems](../README.md) › **0283**</sub>

# 0283 · Move Zeroes

<!-- tags:start -->
<p>
  <img src="https://img.shields.io/badge/Difficulty-Easy-00B8A3?style=for-the-badge" />
  <a href="../../topics/arrays-and-strings/in-place.md"><img src="https://img.shields.io/badge/Arrays%20%26%20Strings-In--place%20modification-1F8F86?style=for-the-badge" /></a>
  <a href="../../topics/arrays-and-strings/two-pointers.md"><img src="https://img.shields.io/badge/Arrays%20%26%20Strings-Two%20pointers-1F8F86?style=for-the-badge" /></a>
  <a href="https://leetcode.com/problems/move-zeroes/"><img src="https://img.shields.io/badge/LeetCode-Open-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" /></a>
</p>
<!-- tags:end -->

## 📝 Problem (in short)
Move all 0s to the end of the array in place, keeping the order of the non-zero elements.

## 💡 Approach
Keep a write index `w`. For every non-zero element, swap it into position `w` and advance `w`. Zeros naturally end up at the back.

## ⏱️ Complexity

| Approach | Time | Space |
|:--|:-:|:-:|
| Extra array | O(n) | O(n) |
| **Write index (in place)** | **O(n)** | **O(1)** |

## 💻 Code
[`solution.cpp`](./solution.cpp)
