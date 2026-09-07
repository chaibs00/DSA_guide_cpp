
# $\color{Red}{\textrm{Strings }}$


> At the data structure level, a string is often implemented using an array, but a string is considered its own data structure/ADT (Abstract Data Type) because it has extra rules and operations. 

<br>

* Strings are **mutable** (you can change characters)
* Internally behave like **dynamic arrays of characters**
* But they provide **extra built-in operations**
* That’s why they are treated as an **ADT(Abstract Data Type), not just a simple array**



### Table of contents 

- [Delaration](#coloryellowtextrmdelaration)
- [Accessing Characters](#coloryellowtextrmaccessing-characters)
- [Traversal](#coloryellowtextrmtraversal)
- [String ↔ Number Conversion](#coloryellowtextrmstring--number-conversion)
- [Lowercase & Uppercase](#coloryellowtextrmlowercase--uppercase)
- [Substring](#coloryellowtextrmsubstring)
- [Common Operations](#coloryellowtextrmcommon-operations)

<br>

## $\color{Yellow}{\textrm{Delaration}}$

* A **string** is a sequence of characters **`ch`**.
* In C++, we use the `string` type from the STL

```cpp
#include <string>
using namespace std;

string s1 = "Hello World!";
```

<br>

## $\color{Yellow}{\textrm{Accessing Characters}}$

* Similar to **arrays**, we can use `indexing`.
    * Indexing starts from `0`
    * Last index = `size() - 1`

```cpp
string s = "hello";

cout << s[0]; // h
cout << s[1]; // e
```

<div align="center "> 

![array](/assets/string.png)

</div>

<br>

## $\color{Yellow}{\textrm{Traversal}}$

### index-based loop :

```cpp
string s = "hello";

for (int i = 0; i < s.size(); i++) {
    cout << s[i] << " ";
}
```


### Range-based loop :

```cpp
for (char c : s) {
    cout << c << " ";
}
```

<br>

## $\color{Yellow}{\textrm{String ↔ Number Conversion}}$

- In many **DSA problems**, we need to **convert strings to numbers or numbers to strings** in order to apply the transformations we want.


### $\color{Cyan}{\textrm{String → Number}}$

```cpp
string s = "2015"; 

// convert to integer 
int x = stoi(s); 
```

- Other possible string conversions :

<div align="center">

| Function   | Converts to   |
| ---------- | ------------- |
| `stoi(s)`  | `int`         |
| `stol(s)`  | `long`        |
| `stoll(s)` | `long long`   |
| `stof(s)`  | `float`       |
| `stod(s)`  | `double`      |
| `stold(s)` | `long double` |

</div>


### $\color{Cyan}{\textrm{Number → String}}$

- Using **`to_string()`**

```cpp
int x = 2024; 
// convert to string 
string s = to_string(x);
```

<br>

## $\color{Yellow}{\textrm{Lowercase \& Uppercase}}$

- Sometimes we need to convert characters or strings between lowercase and uppercase.

### $\color{Cyan}{\textrm{Single Character}}$

```cpp
char x = 'a'; 

x_upper = toupper(c); // A

x_lower = tolower(c); // a
```


### $\color{Cyan}{\textrm{String of characters}}$

- To convert a whole string, there is two methods :


**Method 1**: Loop through the `string` and convert each `character`.

```cpp
string s = "HeLLo"; 

// convert entire string to lowercas
for (char &c : s) {
    c = tolower(c); 
}
```


**Method 2**: Using **`transform()`**


```cpp
// #include <algorithm>
string s = "HeLLo"; 

transform(s.begin(), s.end(), s.begin(), ::tolower);
```


* **`s.begin()`** → Iterator pointing to the first character to transform.
* **`s.end()`** → Iterator pointing **one past** the last character (defines the end of the range).
* **`s.begin()`** → Output iterator. Here we write the result back into the same string, modifying it in place.
* **`::tolower`** → Function that converts each character to its lowercase equivalent.


<br>

## $\color{Yellow}{\textrm{Substring}}$

A **substring** is a contiguous sequence of characters taken from a string.

- The `substr()` function is one of the most commonly used string operations in DSA. It allows you to **`extract a portion of a string`**.

- It is frequently used in problems involving `pattern matching`, `parsing`, `string manipulation` and `recursion`. 

<br>

### $\color{Cyan}{\textrm{Syntaxe }}$

- **`start_index`** → Index of the first character to extract.
- **`length`** → Number of characters to extract (optional). If not entered, the substring extends to the end of the string.

```cpp
string.substr(start_index, length)
```

<br>

### $\color{Cyan}{\textrm{Examples}}$


```cpp
string s = "ABCD";

// start at index 0 , take 1 element ==> "A"
s.substr(0, 1);        

// Start at index 1, take 2 elements ==> "BC" 
s.substr(1, 2);        

// Start at index 2, extract to the end ==> "CD"
s.substr(2);

// Start at the last index, extract to the end ==> "D"
s.substr(s.size() - 1);
```



<br>



## $\color{Yellow}{\textrm{Common Operations}}$

### Size of string

```cpp
string s = "hello";

cout << s.size(); // 5
```


### Concatenation (joining strings)

```cpp
string a = "hello";
string b = "world";

string c = a + " " + b; // "hello world"
```


### Adding characters

```cpp
string s = "abc";

s.push_back('d'); // "abcd"
```


### Removing characters

```cpp
string s = "abcd";

s.pop_back(); // "abc"
```


### Comparaison

```cpp
string a = "abc";
string b = "abc";

if (a == b) {
    cout << "Equal";
}
```





