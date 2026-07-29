# $${\textbf{ \color{red}(Dynamic) \space Array \space Data \space Structure }}$$ 


**Dynamic arrays** are arrays whose **size can change during runtime**, with **memory allocated** on the **heap**.

> In C++, dynamic arrays are implemented using **`std::vector`**.




## $\color{Yellow}{\textrm{Declaration}}$

### Using `std::vector` :

```c
// #include <vector>  ===> MUST include this library 
// using namespace std;

// empty vector
vector<int> v1; 

// size 5, default values (0)
vector<int> v2(5); 

// size 5, all values = 10
vector<int> v3(5, 10);  

// initializer list
vector<int> v4 = {1, 2, 3}; 
```

```bash
v1 = { }              

v2 = {0, 0, 0, 0, 0} 

v3 = {10, 10, 10, 10, 10} 

v4 = {1, 2, 3}       
```


### Manual dynamic array `new` :

We can also create a dynamic array manually using `new`.
- This allocates memory on the **heap** (free store), not on the stack.

```cpp
// allocate array of size 5
int* arr = new int[5];

// asign a value 
arr[0] = 12 ;

// Releases the memory allocated by new 
delete[] arr;
```

### ⚠️ IMPORTANT :

* Since we **manually allocate memory**, we must also **manually free it** to avoid **memory leaks**.
* Values must be assigned manually


## $\color{Yellow}{\textrm{Acess\space an\space Element}}$

- Element can be accessed using their **index**.
- Element can also be accessed using the function **`.at()`**

```cpp
vector<int> v = {3, 2, 1}; 

v[0];        
v.at(0);     
```

```bash
3
3
```


### ⚠️ IMPORTANT :

* `v[i]` does **not check bounds**, so accessing an invalid index may return garbage or cause undefined behavior.
* `v.at(i)` is **safer** because it checks bounds and throws an error if the index is invalid.


```cpp
vector<int> v = {3, 2, 1}; 

v[6];        // return random number
v.at(6);     // ❌ return Error 
```


## $\color{Yellow}{\textrm{Adding\space an\space Element}}$

### Add element at the back `.push_back()` :

```cpp
vector<int> v = {3, 2, 1}; 

// adding elemnt at the back 
v.push_back(10); 
```

```bash 
v = {3, 2, 1, 10}
```


### Add element at index `i` :

Using `.insert( iterator , value)`
- `iterator` → position where you insert
- `value` → element to add

```cpp
vector<int> v = {3, 2, 1}; 

// insert 10 at index 1
v.insert(v.begin() + 1, 10);
```

```bash
v = {3, 10, 2, 1}
```

* `v.begin()` returns an iterator to the first element
* `v.begin() + i` points to index `i`
* `insert(position, value)` adds the element at that position


## $\color{Yellow}{\textrm{Removing\space Elements}}$





## $\color{Yellow}{\textrm{Traversal}}$

```

// index-based
for (int i = 0; i < v.size(); i++) {
    cout << v[i];
}

// range-based
for (int x : v) {
    cout << x;
}

```

## $\color{Yellow}{\textrm{Useful\space Functions}}$

```
v.size();       // number of elements
v.capacity();   // allocated memory
v.empty();      // check if empty
v.front();      // first element
v.back();       // last element
v.begin()
v.rbegin():
```