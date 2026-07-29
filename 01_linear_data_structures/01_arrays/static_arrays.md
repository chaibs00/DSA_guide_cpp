# $$\color{Red}{\textrm{Static\space Arrays}}$$

**Static arrays** are arrays whose **size is fixed** at the time of declaration and **cannot be changed during runtime**.

It Efficient and fast, But less flexible compared to dynamic arrays.


## ${\color{yellow}Declaration \space of \space an \space Array }$ 


- Syntaxe

```cpp
data_type array_name[size];
```

- Example 

```c
// Array to store integer values :
int arr[5];      

// Array to store char values : 
char arr[10];   

// An array  of strings : 
string arr[12];
```


## ${\color{yellow}Initializing \space of \space an \space Array }$ 

Arrays can be initialized in several ways.


```c
// Initialize while declaring the array 
char arr[5] = { 'a', 'b', 'c', 'd', 'e' };

// Let the compiler determine the size
int arr[] = { 1, 2, 3, 4, 5 };

// Partial initialization
string arr[10] = { "hello", "world", "!"};

// Empty initialization 
int arr[5] = {}; 
```


## ${\color{yellow}Accessing \space Elements}$ 

Each element is accessed using its **index**.

```c
int arr[] = {10, 2, 7, 1, 3, 5, 1} ;

cout << arr[0]; // 10
cout << arr[1]; // 2
cout << arr[5]; // 1
cout << arr[10]; // ❌ will return a random number 
```

- The **first** element has index **0**.
- The **last** element has index **size - 1**.


<div align="center"> 

![array](/assets/arrays.png)

</div>

> Notice that each address increases by **4 bytes** because an `int` usually occupies 4 bytes.


## ${\color{yellow} \space Change \space Elements}$

Elements can be changed using their index.

```cpp
int arr[] = {5, 10, 15};

arr[1] = 100;   
```

- The array becomes :
```py 
5 100 15 
```



## ${\color{yellow}Traversing \space an \space Array}$

The most common way to traverse every element is with a **loop**.

```c
int arr[] = {3, 5, 7, 9, 11};

// Get size of static array :
int size = sizeof(arr) / sizeof(arr[0]);

for (int i = 0; i < size; i++)
{
    cout << arr[i] << " ";
}
```


```c
int arr[] = {3, 5, 7, 9, 11};

// using a foreach loop 
for (int num : arr){
    cout << num  << " ";
}
```

```bash 
3 5 7 9 11
```








https://www.geeksforgeeks.org/dsa/array-data-structure-guide/







