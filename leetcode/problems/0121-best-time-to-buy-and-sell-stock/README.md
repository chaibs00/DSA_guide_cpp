<sub>[🏠 Home](../../README.md) › [All problems](../README.md) › **0121**</sub>

# 0121 · Best Time to Buy and Sell Stock

<!-- tags:start -->
<p>
  <img src="https://img.shields.io/badge/Difficulty-Easy-00B8A3?style=for-the-badge" />
  <a href="../../topics/arrays-and-strings/sliding-window.md"><img src="https://img.shields.io/badge/Arrays%20%26%20Strings-Sliding%20window-1F8F86?style=for-the-badge" /></a>
  <a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"><img src="https://img.shields.io/badge/LeetCode-Open-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" /></a>
</p>
<!-- tags:end -->

## 📝 Problem (in short)
Given daily prices, pick one day to buy and a later day to sell to maximise profit (0 if none).

## 💡 Approach
The window's left edge is the cheapest price so far; each day, profit = price − that minimum.

## ⏱️ Complexity

| Approach | Time | Space |
|:--|:-:|:-:|
| Brute force | O(n²) | O(1) |
| **One pass** | **O(n)** | **O(1)** |

## 💻 Code
[`solution.cpp`](./solution.cpp)
