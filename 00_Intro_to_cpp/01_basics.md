
# C++ Basics : 



## Write your first *Hello world* :

```cpp
#include <iostream>

int main(){       
    std::cout << "Hello world !" ;
    return 0 ;
}
```


### Explanation

* `#include <iostream>`: Includes the standard input/output library.
* `int main()`: The starting point of every C++ program.
* `std::cout`: Sends output to the console.
* `<<`: Output operator (streams data to the output).
* `return 0;`: Indicates successful program execution.




## 1. Getting User Input

- Let’s read simple input from the user.
- In C++, variables and their types must be defined before use.

<details>

### Example using `std::cin`

```cpp
#include <iostream>
#include <string>

int main() {
    std::string name;
    int age;

    std::cout << "Enter your name: ";
    std::cin >> name;

    std::cout << "Enter your age: ";
    std::cin >> age;

    std::cout << "Hello " << name << ", you are " << age << " years old.";
    return 0;
}
```

### Output

```bash
Enter your name: Alice
Enter your age: 60
Hello Alice, you are 60 years old.
```

### Issue with whitespace

```bash
Enter your name: Alice John
Enter your age:
Hello Alice, you are 0 years old.
```

**Note:**
`std::cin` stops reading at whitespace. To read a full line (including spaces), use `std::getline`.

### Correct approach with `std::getline`

```cpp
std::string name;
std::getline(std::cin, name);
```

### Output

```bash
Enter your name: Alice John
Enter your age: 10
Hello Alice John, you are 10 years old.
```

</details>


## 2. Data Types in C++

C++ provides several built-in data types to store different kinds of values.

<details>

| Data Type | Description                          | Example Declaration        | Typical Size |
|----------|--------------------------------------|----------------------------|--------------|
| `int`    | Stores whole numbers                  | `int age = 25;`            | 4 bytes      |
| `float`  | Stores decimal numbers (low precision)| `float price = 10.5f;`     | 4 bytes      |
| `double` | Stores decimal numbers (high precision)| `double pi = 3.14159;`     | 8 bytes      |
| `char`   | Stores a single character             | `char grade = 'A';`        | 1 byte       |
| `bool`   | Stores true or false                  | `bool isActive = true;`    | 1 byte       |
| `string` | Stores text (sequence of characters)  | `std::string name = "Ali";`| Varies       |

**Note:**  
- Sizes may vary depending on the system and compiler.  
- `string` is not a primitive type; it comes from the C++ Standard Library (`<string>`).

</details>

## 3. Operators in C++

Operators are symbols used to perform operations on variables and values.

<details>

### Arithmetic Operators

| Operator | Description       | Example |
|--------|-------------------|---------|
| `+`    | Addition          | `a + b` |
| `-`    | Subtraction       | `a - b` |
| `*`    | Multiplication   | `a * b` |
| `/`    | Division          | `a / b` |
| `%`    | Modulus (remainder)| `a % b` |


### Relational Operators

| Operator | Description          | Example |
|--------|----------------------|---------|
| `==`   | Equal to             | `a == b` |
| `!=`   | Not equal to         | `a != b` |
| `>`    | Greater than         | `a > b` |
| `<`    | Less than            | `a < b` |
| `>=`   | Greater or equal     | `a >= b` |
| `<=`   | Less or equal        | `a <= b` |


### Logical Operators

| Operator | Description | Example |
|--------|-------------|---------|
| `&&`   | Logical AND | `a && b` |
| `\|\|`   | Logical OR  | `a \|\| b` |
| `!`    | Logical NOT | `!a` |


### Assignment Operators

| Operator | Description           | Example |
|--------|-----------------------|---------|
| `=`    | Assign                | `a = 5` |
| `+=`   | Add and assign        | `a += 2` |
| `-=`   | Subtract and assign   | `a -= 2` |
| `*=`   | Multiply and assign   | `a *= 2` |
| `/=`   | Divide and assign     | `a /= 2` |
| `%=`   | Modulus and assign    | `a %= 2` |


### Ternary Operator

- Used as a short form of `if-else`.
- If condition (`a > b`) is true, execute `a`; otherwise, execute `b`.

| Operator | Description | Example |
|--------|-------------|---------|
| `?:`   | Conditional | `result = (a > b) ? a : b;` |

</details>


## 4. Conditional Statements in C++

Conditional statements allow your program to make decisions based on certain conditions.

<details>

### `if` Statement

Executes a block of code if a condition is true.

```cpp
int number ;

if (number > 0) {
    std::cout << "The number is positive.";
}
```

**Explanation:**

- The code inside `{}` runs only if `number > 0` is true.


### `else if` Statement

Adds additional conditions after an `if`.

```cpp
int number ;

if (number > 0) {
    std::cout << "Positive";
} else if (number < 0) {
    std::cout << "Negative";
}
```

**Explanation:**

* Checks the first condition; if false, it checks the `else if` condition.


### `else` Statement

Runs a block of code if all previous conditions are false.

```cpp
int number ;

if (number > 0) {
    std::cout << "Positive";
} else if (number < 0) {
    std::cout << "Negative";
} else {
    std::cout << "Zero";
}
```

**Explanation:**

* `else` acts as a default when no other condition is true.


### `switch` Statement

Used to select one of many code blocks based on a value.

```cpp
int day ;

switch (day) {
    case 1:
        std::cout << "Monday";
        break;
    case 2:
        std::cout << "Tuesday";
        break;
    case 3:
        std::cout << "Wednesday";
        break;
    default:
        std::cout << "Other day";
}
```

**Explanation:**

* `switch` checks the value of `day`.
* Each `case` is checked; `break` prevents “fall-through” to the next case.
* `default` runs if no case matches.
</details>



## 5. Loops in C++ :

Loops allow you to execute a block of code multiple times until a condition is met.

<details>

### `while` Loop

Executes code repeatedly **while** a condition is true.

```cpp
while (condition) {
    // Code to execute
}
```

**Example:**

```cpp
int i = 1;
while (i <= 5) {
    std::cout << i << " ";
    i++;
}
```

**Output:**

```bash
1 2 3 4 5
```



### `do-while` Loop

Executes code **at least once** and then repeats while a condition is true.

```cpp
do {
    // Code to execute
} while (condition);
```

**Example:**

```cpp
int i = 1;
do {
    std::cout << i << " ";
    i++;
} while (i <= 5);
```

**Output:**

```
1 2 3 4 5
```



### `for` Loop

Used when the number of iterations is known in advance.

```cpp
for (initialization; condition; increment) {
    // Code to execute
}
```

**Example:**

```cpp
for (int i = 1; i <= 5; i++) {
    std::cout << i << " ";
}
```

**Output:**

```bash
1 2 3 4 5
```



### Range-based `for` Loop (for-each)

Simplifies traversing arrays or other iterable containers.

```cpp
for (auto element : array) {
    // Code to process each element
}
```

**Example:**

```cpp
int arr[] = {1, 2, 3, 4, 5};
for (auto element : arr) {
    std::cout << element << " ";
}
```

**Output:**

```
1 2 3 4 5
```

</details>



## 6. Functions in C++

Functions are blocks of code that perform a specific task. They can accept **parameters** and return a value.

<details>

### Defining and Calling a Function

- The **return type** of a function specifies the type of value it gives back (`int`, `float`, `double`, etc.). 
 

```cpp
int add(int a, int b) {
    return a + b;  // Returns the sum of two numbers
}

float multiply(float x, float y) {
    return x * y;  // Returns the product of two numbers
}

int main() {
    int sum = add(3, 5);           // Function call, sum = 8
    float product = multiply(2.5, 4.0); // Function call, product = 10.0

    std::cout << "Sum: " << sum << std::endl;
    std::cout << "Product: " << product << std::endl;

    return 0;
}
```

**Explanation:**
- `int add(int a, int b)` defines a function named `add` that takes two integers and returns an integer (the sum).  
- `add(3, 5)` calls the function, and the returned value is stored in `result`. 


### Math-Related Functions

| Function         | Example          | Description                                |
| ---------------- | ---------------- | ------------------------------------------ |
| `std::max(a, b)` | `std::max(4, 7)` | Returns the **maximum** of two numbers     |
| `std::min(a, b)` | `std::min(4, 7)` | Returns the **minimum** of two numbers     |
| `pow(a, b)`      | `pow(3, 2)`      | Computes **a^b**                           |
| `sqrt(x)`        | `sqrt(36)`       | Returns the **square root** of `x`         |
| `abs(x)`         | `abs(-9)`        | Returns the **absolute value** of `x`      |
| `round(x)`       | `round(4.3)`     | Rounds `x` to the **nearest integer**      |
| `ceil(x)`        | `ceil(4.3)`      | Rounds `x` **up** to the nearest integer   |
| `floor(x)`       | `floor(4.7)`     | Rounds `x` **down** to the nearest integer |


</details>


## 7. Function template : 


A **function template** lets you write a single function that works with **different data types**, eliminating the need to overload it for each type.

<details>

**Single-type template:**

```cpp
template <typename T>
T max(T x, T y) {
    return (x > y) ? x : y;
}

int main() {
    max(2, 1);          // int
    max(2.987, 1.234);  // double
    max('4', '7');      // char
    max(true, false);   // bool
}
```

**Template with two different types:**

```cpp
template <typename T, typename U>
auto max(T x, U y) {
    return (x > y) ? x : y;
}

int main() {
    max(true, 2);  // bool and int
}
```

</details>
