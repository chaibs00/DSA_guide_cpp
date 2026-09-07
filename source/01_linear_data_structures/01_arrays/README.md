# $$\color{Red}{\textrm{Arrays\ Data\ Structure}}$$

An array is a fundamental and **linear** data structure that stores items at contiguous memory locations. It stores multiple **elements of the same type**.
- **linear**: The elements are stored one after another in a single sequence.
- **contiguous**: The elements are stored next to each other in memory, with no gaps between them.

### $\color{Yellow}{\textrm{ Adavantages\ and\ donwsides }}$


| ✅ Advantages | ❌ Downsides |
|---|---|
| **O(1) random access**<br>Access any element instantly using its index. | **Fixed size**<br>The size is determined when the array is created. (**only for static arrays**) |
| **Cache friendly**<br>Contiguous memory improves CPU cache performance. | **Costly insertions/deletions**<br>Elements must be shifted (*O(n)*). |
| **Simple**<br>Easy to understand and implement. | **Requires contiguous memory**<br>Large arrays may be difficult to allocate. |
| **Low memory overhead**<br>No extra pointers are required. | **Same data type**<br>All elements must have the same type. |


### $\color{Yellow}{\textrm{Dynamic\ VS\ Static\ Array}}$

- **Dynamic Arrays** are arrays whose size can grow or shrink at runtime, with memory allocated on the **heap**.

- **Static Arrays** are arrays with a fixed size determined at declaration, typically stored on the **stack**.