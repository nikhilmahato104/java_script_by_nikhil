// An array in JavaScript is a special data structure used to store multiple values in a single variable.
// Arrays are ordered collections of elements, and each element is identified by its index. 
//JavaScript arrays are flexible and can store different
// types of data (numbers, strings, objects, functions, etc.) in the same array.

// Key Features of JavaScript Arrays
// Dynamic: Arrays in JavaScript can grow or shrink dynamically.
// Heterogeneous: They can hold elements of different data types (e.g., numbers, strings, objects).
// Zero-Based Indexing: The first element starts at index 0.
// Built-In Methods: JavaScript arrays have many methods for adding, removing, and manipulating elements.


// Arrays for demonstration

const arr = [1, 2, 3, 4, 5];
const names = ["Alice", "Bob", "Charlie", "David"];
const nestedArr = [[1, 2], [3, [4, 5]]];

// ** Access and Information **
arr.length;                  // 5

// ** Searching Methods **
arr.indexOf(3);              // 2
arr.lastIndexOf(3);          // 2
arr.includes(4);             // true
names.find(name => name.startsWith("B"));    // "Bob"
arr.findIndex(num => num > 3);               // 3

// ** Iteration Methods **
arr.forEach(num => num * 2);                 // No return, side effects
arr.map(num => num * 2);                     // [2, 4, 6, 8, 10]
arr.filter(num => num % 2 === 0);            // [2, 4]
arr.reduce((sum, num) => sum + num, 0);      // 15
arr.reduceRight((sum, num) => sum + num, 0); // 15
names.some(name => name.startsWith("D"));    // true
names.every(name => name.length > 3);        // true

// ** Adding and Removing **
arr.push(6);                  // 6 (new length), arr = [1, 2, 3, 4, 5, 6]
arr.pop();                    // 6, arr = [1, 2, 3, 4, 5]
arr.unshift(0);               // 6 (new length), arr = [0, 1, 2, 3, 4, 5]
arr.shift();                  // 0, arr = [1, 2, 3, 4, 5]

// ** Slicing and Splicing **
arr.slice(1, 3);              // [2, 3]
arr.splice(2, 1, 99);         // [3], arr = [1, 2, 99, 4, 5]

// ** Sorting Methods **
names.sort();                 // ["Alice", "Bob", "Charlie", "David"]
arr.sort((a, b) => b - a);    // [99, 5, 4, 2, 1]
arr.reverse();                // [1, 2, 4, 5, 99]

// ** Combining and Flattening **
[1, 2].concat([3, 4]);        // [1, 2, 3, 4]
//...........................................................................................................





arr.join("-");                // "1-2-4-5-99"
nestedArr.flat();             // [1, 2, 3, [4, 5]]
nestedArr.flat(2);            // [1, 2, 3, 4, 5]


// ** Copying and Filling **
arr.copyWithin(1, 0, 2);      // [1, 1, 2, 5, 99]
arr.fill(0, 1, 3);            // [1, 0, 0, 5, 99]

// ** Iterators **
for (let key of arr.keys()) console.log(key); // Logs: 0, 1, 2, 3, 4
for (let value of arr.values()) console.log(value); // Logs: 1, 0, 0, 5, 99
for (let [key, value] of arr.entries()) console.log(key, value); // Logs key-value pairs

// ** Flattening and Mapping **
[1, 2, 3].flatMap(x => [x, x * 2]);          // [1, 2, 2, 4, 3, 6]

// ** Converting **
Array.from("hello");            // ['h', 'e', 'l', 'l', 'o']
Array.of(1, 2, 3);              // [1, 2, 3]


// Summary
// High-Importance (Commonly Used)

// push(), pop(), shift(), unshift()
// map(), filter(), reduce(), forEach()
// slice(), splice(), concat()
// indexOf(), find(), includes(), some(), every()
// sort(), reverse(), join()


// Medium-Importance
// fill(), copyWithin()
// flat(), flatMap()
// keys(), values(), entries()

// Rarely Used
// Array.from(), Array.of()
