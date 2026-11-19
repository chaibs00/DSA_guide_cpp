<h1 align="center">1. Two Sum</h1>

<div align="center">

[![LeetCode](https://img.shields.io/badge/LeetCode-1-FFA116?labelColor=1a1a1a&logo=leetcode&logoColor=FFA116)](https://leetcode.com/problems/two-sum/)
![Easy](https://img.shields.io/badge/Easy-00B8A3?style=flat-square)
![Arrays](https://img.shields.io/badge/Arrays-2563EB?style=flat-square)
![Hash Table](https://img.shields.io/badge/Hash_Table-10B981?style=flat-square)

</div>

<br>

Given an array of integers and a target, find the **indices of the two numbers** that add up to the target.
Exactly one valid answer exists, and you can't use the same element twice.

```
Input:  nums = [2, 7, 11, 15], target = 9
Output: [0, 1]          // nums[0] + nums[1] = 2 + 7 = 9
```

<br>

## ${\color{#FFA116}\textsf{Intuition}}$
For every number `x`, the number we need is fixed: `target - x` (its **complement**).
Instead of searching the whole array for it each time, we remember every number we've already seen in a **hash map** (`value → index`). Then "have I seen the complement?" becomes an O(1) lookup.

<br>

## ${\color{#FFA116}\textsf{Visual\ walkthrough}}$
`nums = [2, 7, 11, 15]`, `target = 9`

```
 i | nums[i] | complement (9 - nums[i]) | in map?  | action            | map after
---+---------+--------------------------+----------+-------------------+-----------
 0 |    2    |            7             |   no     | store 2 → 0       | {2:0}
 1 |    7    |            2             |  YES (0) | return [0, 1] ✅  |
```

The answer is found in a single pass, without ever checking the pair (11, 15).

<br>

## ${\color{#FFA116}\textsf{Approaches}}$
| Approach | Idea | Time | Space |
|----------|------|:----:|:-----:|
| Brute force | Check every pair `(i, j)` | O(n²) | O(1) |
| Hash map ✅ | One pass: look up the complement, then store the current value | O(n) | O(n) |

<br>

## ${\color{#FFA116}\textsf{Edge\ cases}}$
- **Duplicates:** `[3, 3]`, target `6` → `[0, 1]`. This works because we **check before storing**, so an element never pairs with itself.
- **Negative numbers:** `[-1, -2, -3, -4]`, target `-6` → complements work the same way.
- **Answer not at the start:** `[3, 2, 4]`, target `6` → `[1, 2]` (don't pair 3 with itself).

<br>

## ${\color{#FFA116}\textsf{Related\ problems}}$
- [217. Contains Duplicate](../0217-contains-duplicate/): same "have I seen this before?" hash-map idea