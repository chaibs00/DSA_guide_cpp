# C++ Advanced Concepts 📕

[← Previous: Intermediate](02_intermediate.md) | [Back to Index](00_Intro.md)

<p align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" width="60"/>
</p>



## Table of Contents
1. [Memory Addresses](#memory-addresses)
2. [Pass by Value vs Reference vs Address](#pass-by-value-reference-and-address)
3. [Pointers](#pointers)
4. [Dynamic Memory (Heap)](#dynamic-memory--heap)



## Memory Addresses

A **memory address** is a location in the computer's memory where data is stored. In C++, you can access the memory address of a variable using the **address-of operator** (`&`).

<details>
<summary>Click to expand</summary>

### Display the Address of a Variable

```cpp
int num = 10;
std::cout << "The address of num is: " << &num << std::endl;
```

### Hexadecimal Format

Memory addresses are often displayed in **hexadecimal** format, which is more compact and easier for humans to read.

```cpp
int num = 10;
std::cout << "The address of num in hexadecimal: " << std::hex << &num << std::endl;
```

**Examples:**
- **Hexadecimal**: `0xFC065FFCE0` = **1082438712544** (decimal)
- **Hexadecimal**: `0xFC065FFCDC` = **1082438712540** (decimal)
- **Hexadecimal**: `0xFC065FFCDB` = **1082438712539** (decimal)

</details>



## Pass by Value, Reference, and Address

Understanding how data is passed to functions is crucial for writing efficient C++ code.

<details>
<summary>Click to expand</summary>

### Pass by Value

When a variable is passed **by value**, a **copy** of the original variable is created. Any changes made inside the function will not affect the original variable.

```cpp
#include <iostream>
using namespace std;

void swapByValue(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 5, y = 10;
    swapByValue(x, y);  // x = 5, y = 10 (unchanged)
    return 0;
}
```

**Result:** The variables `x` and `y` are unchanged because **copies** were swapped, not the originals.

--- 

### Pass by Reference

**Pass by reference** means passing the **memory address** of the variable. The function works directly with the original data.

```cpp
#include <iostream>
using namespace std;

void swapByReference(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 5, y = 10;
    swapByReference(x, y);  // x = 10, y = 5 (swapped)
    return 0;
}
```

**Result:** The variables `x` and `y` are swapped because the function has access to the **original memory addresses**.

---

### Pass by Address (Pointers)

Another way to pass by reference is using **pointers**. You pass the **memory address** of the variable to the function.

```cpp
#include <iostream>
using namespace std;

void swapByAddress(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 5, y = 10;
    swapByAddress(&x, &y);  // x = 10, y = 5 (swapped)
    return 0;
}
```

**Result:** The variables `x` and `y` are swapped because the function has access to the **memory addresses**.

</details>


## Pointers

A **pointer** is a variable that stores the **memory address** of another variable. Pointers allow you to manipulate data directly in memory.

<details>
<summary>Click to expand</summary>

### Syntax

- `&`: Address-of operator (gets the address of a variable)
- `*`: Dereference operator (accesses the value at the memory address)

```cpp
int x = 10;
int *ptr = &x;  // Pointer ptr holds the address of x

cout << "Address of x: " << &x << endl;
cout << "Value stored at ptr: " << *ptr << endl;  // Output: 10
```

---

### Null Pointers

A **null pointer** points to **nothing**. It indicates that the pointer is not currently pointing to a valid memory location.

```cpp
int *ptr = nullptr;  // Initialize pointer as null

if (ptr == nullptr) {
    std::cout << "The pointer was not successfully assigned to an address";
}
```

### ⚠️ Important Safety Rule

**It is unsafe to dereference a null pointer:**

```cpp
int *ptr = nullptr;
cout << *ptr;  // ❌ Unsafe: dereferencing a null pointer
```

> **Always check for `nullptr` before dereferencing a pointer.**

</details>


## Dynamic Memory = Heap

**Dynamic Memory** is memory allocated during **runtime**, after the program has been compiled or is running. It's useful when you don't know how much memory you'll need in advance.

<details>
<summary>Click to expand</summary>

### Heap vs Stack

Memory can be allocated on the **stack** or the **heap**:

| **Stack** | **Heap** |
|-----------|----------|
| Memory allocated automatically when variables are declared | Memory manually allocated using `new` |
| Automatically deallocated when function returns | Must be manually deallocated using `delete` |
| Limited size | Larger, more flexible |
| Faster access | Slower access |

---

### Allocating Memory (`new` operator)

The `new` operator dynamically allocates memory on the **heap**.

```cpp
int* ptr = new int;  // Dynamically allocate memory for an integer
*ptr = 10;           // Assign value to the allocated memory
```

---

### Deallocating Memory (`delete` operator)

After using dynamic memory, you must **free it** to avoid **memory leaks**.

```cpp
delete ptr;  // Deallocate the memory allocated for ptr
```

### ⚠️ Memory Leaks

A **memory leak** occurs when dynamically allocated memory is not deallocated. The memory remains allocated but is no longer accessible, consuming resources unnecessarily.

**Example of proper memory management:**

```cpp
int* ptr = new int;
*ptr = 42;

// Use the pointer...

delete ptr;    // Free the memory
ptr = nullptr; // Good practice: set to nullptr after deletion
```

---

### Dynamic Arrays

You can also allocate arrays dynamically:

```cpp
int* arr = new int[5];  // Allocate array of 5 integers

// Use the array...

delete[] arr;  // Use delete[] for arrays
```

> **Note:** Always use `delete[]` (with brackets) for arrays allocated with `new[]`.

</details>

---

[← Previous: Intermediate](02_intermediate.md) | [Back to Index](00_Intro.md)