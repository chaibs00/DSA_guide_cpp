
# C++ Intermediate Concepts : 

<p align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" width="60"/>
</p>



## Strings and Character Handling : 

- C++ provides the `std::string` class to work with text. 
- Strings are **mutable**, meaning you can modify them after creation.

<details>

--- 

### Declaring Strings

- **Double quotes** are used for strings.
```cpp
#include <string>

std::string str1 = "This is a string";  
```

- **single quotes** are for single characters (`char` type).
```cpp
char letter = 'A';   
char digit = '7';    
```

--- 

### Converting Numbers and Strings : 

#### Number -> String

```cpp
double num = 23.43;
std::string str = std::to_string(num);
std::cout << str;  
```

#### String -> Number 

| Function         | Converts To |
| ---------------- | ----------- |
| `std::stoi(str)` | int         |
| `std::stol(str)` | long        |
| `std::stof(str)` | float       |
| `std::stod(str)` | double      |

**Example:**

```cpp
std::string s = "42";
int x = std::stoi(s);  // x = 42
```

---

### Looping Through a String

- **Index-based loop:** Access each character via its position.
- **Range-based loop:** Simplifies iteration over all characters.

```cpp
std::string S = "Hello";

// Index-based loop
for (size_t i = 0; i < S.size(); i++)
    std::cout << S[i];

// Range-based loop
for (char ch : S)
    std::cout << ch;
```


---

### String Operations

```cpp
std::string s1 = "Hello ";
std::string s2 = s1 + "World!"; // Concatenation
s1 += "!";                       // Append

if (s1 == s2)
    std::cout << "Equal";        // Comparison
```

---

### Common String Methods

| Function                  | Description                  | Example                                         |
| ------------------------- | ---------------------------- | ----------------------------------------------- |
| `s.append(str)`           | Add `str` to the end         | `"Hello".append(" World")` → `"Hello World"`    |
| `s.compare(str)`          | Compare strings (`-1, 0, 1`) | `"apple".compare("banana")` → -1                |
| `s.erase(index, length)`  | Remove characters            | `"Hello World".erase(5, 6)` → `"Hello"`         |
| `s.find(str)`             | Find substring               | `"Hello World".find("World")` → 6               |
| `s.insert(index, str)`    | Insert string                | `"Hello".insert(5, " World")` → `"Hello World"` |
| `s.size()/s.length()`     | Get string length            | `"Hello".size()` → 5                            |
| `s.substr(start, length)` | Extract substring            | `"Hello World".substr(6,5)` → `"World"`         |

---

### Character Handling (`<cctype>`)

| Function           | Description          | Example              | Result |
| ------------------ | -------------------- | -------------------- | ------ |
| `isalnum(ch)`      | Alphanumeric?        | `isalnum('A')`       | true   |
| `isalpha(ch)`      | Alphabetic?          | `isalpha('z')`       | true   |
| `islower(ch)`      | Lowercase?           | `islower('a')`       | true   |
| `isupper(ch)`      | Uppercase?           | `isupper('A')`       | true   |
| `isdigit(ch)`      | Numeric?             | `isdigit('4')`       | true   |
| `isspace(ch)`      | Whitespace?          | `isspace(' ')`       | true   |
| `std::tolower(ch)` | Convert to lowercase | `tolower('A')` → 'a' |        |
| `std::toupper(ch)` | Convert to uppercase | `toupper('a')` → 'A' |        |

**Example:**

```cpp
char ch = 'B';
if (islower(ch)) {
    std::cout << "Lowercase";
} else {
    std::cout << "Uppercase";  // Output: Uppercase
}

char lower = std::tolower(ch);  // 'b'
```

</details>





## Namespaces : 

Namespaces in C++ help **prevent name conflicts** in large projects by grouping identifiers (variables, functions, classes) under a named scope.

<details>


### Example of Custom Namespaces

```cpp
#include <iostream>

namespace First {
  int x = 1;
}

namespace Second {
  int x = 2;
}

int main() {
  int x = 0;
  // Local variable x
  std::cout << x << std::endl;

  // Access x from First namespace
  std::cout << First::x << std::endl;  
  
  // Access x from Second namespace
  std::cout << Second::x << std::endl; 
  
  return 0;
}
```

```bash
0
1
2
```


---

### Using the Standard Namespace

- The `std` namespace contains standard library components like `cout`, `cin`, `endl`, `vector`, `string`, etc.


```cpp
#include <iostream>

using namespace std;

int main(){
  cout << "hellow world !" ;
}
```

> **Notice:** By using `namespace std;`, we can write `cout`, `cin`, `endl`..., without the `std::` prefix.

</details>




## Typedef & Type Alias :

- C++ allows you to create **aliases** for existing data types.  

- An **alias** is simply an alternative name for a data type. 

<details>

- In case of very long data types, using alias is a good practice. 

```cpp
#include <vector>

// `table_t` is an alias for `std::vector<int>`
typedef std::vector<int> table_t ;
using  table_t = std::vector<int> ;

int main() {
  // Equivalent to std::vector<int> mytable;
  table_t mytable;  
}
```                 

> - `using` syntax is often preferred over `typedef` for readability, especially with complex types.

</details>




## Classes in C++ : 

A **class** is a blueprint for creating objects. It can contain **attributes** (data members) and **methods** (functions).


### Creating a Class :

* `class Human` defines a class named `Human`.
  * `name`, `occupation`, and `age` are **attributes** (data members).
  * `nameFunc()` is a **method** that prints the name.
* `human1` is an **object** of the `Human` class.
* Public members can be accessed and modified directly from the object.

```cpp
#include <iostream>
#include <string>

class Human {
    // Access specifiers: private, public, or protected
    // Public members are accessible from outside the class
public:
    std::string name;        // Attribute
    std::string occupation;  // Attribute
    int age;                 // Attribute

    // Method
    void nameFunc() {
        std::cout << "Name: " << name << std::endl;
    }
};

int main() {
    Human human1;
    human1.name = "Alex";
    human1.occupation = "Nothing";
    human1.age = 89;

    // Calling the method
    human1.nameFunc();  // Output: Name: Alex
}
```






## Structs in C++ :

A **struct** (structure) is a way to group related variables under one name. Unlike arrays, structs can store variables of **different data types**. Each variable inside a struct is called a **member**.

> **Note:**  
> - Structs are usually **passed by value**, meaning when you pass a struct to a function, a copy is created. Changes inside the function do **not** affect the original struct.

---

## Creating a Struct

```cpp
#include <iostream>
#include <string>

struct Point {
    int x;
    int y;
};
```








