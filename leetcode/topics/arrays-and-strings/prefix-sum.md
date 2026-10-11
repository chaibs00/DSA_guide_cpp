<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=transparent&fontColor=1F8F86&height=90&text=Prefix%20sum&fontSize=40&animation=twinkling" width="100%" />
</p>

<sub>[🏠 Home](../../README.md) › [Arrays & Strings](./README.md) › **Prefix sum**</sub>

## 💡 The pattern
Precompute `pre[i] = a[0] + … + a[i-1]`; any range sum becomes `pre[r] - pre[l]`.

**Use it when:** Many range-sum queries on a fixed array.

## 📝 Problems

| # | Problem | Difficulty | Also in |
|:-:|:--|:-:|:--|
| 1480 | [Running Sum of 1d Array](../../problems/1480-running-sum-of-1d-array) | ![Easy](https://img.shields.io/badge/-Easy-00B8A3) | [In-place modification](../arrays-and-strings/in-place.md) |
