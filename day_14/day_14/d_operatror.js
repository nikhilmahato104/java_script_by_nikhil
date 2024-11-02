// Arithmetic Operators
let a = 10;
let b = 5;
console.log("Arithmetic Operations:");
console.log("Addition:", a + b);            // 15
console.log("Subtraction:", a - b);         // 5
console.log("Multiplication:", a * b);      // 50
console.log("Division:", a / b);            // 2
console.log("Modulus:", a % b);             // 0
console.log("Exponentiation:", a ** b);     // 100000

// Assignment Operators
let x = 10;
x += 5; // x = x + 5
console.log("Assignment:", x);              // 15

// Comparison Operators
console.log("Comparison Operations:");
console.log("Equal:", a == b);               // false
console.log("Strict Equal:", a === b);      // false
console.log("Not Equal:", a != b);           // true
console.log("Strict Not Equal:", a !== b);   // true
console.log("Greater Than:", a > b);         // true
console.log("Less Than:", a < b);            // false
console.log("Greater Than or Equal:", a >= b); // true
console.log("Less Than or Equal:", a <= b);  // false

// Logical Operators
let c = true;
let d = false;
console.log("Logical Operations:");
console.log("AND:", c && d);                 // false
console.log("OR:", c || d);                  // true
console.log("NOT:", !c);                      // false

// Bitwise Operators
let e = 5;  // 0101 in binary
let f = 3;  // 0011 in binary
console.log("Bitwise Operations:");
console.log("AND:", e & f);                  // 1 (0001)
console.log("OR:", e | f);                   // 7 (0111)
console.log("XOR:", e ^ f);                  // 6 (0110)
console.log("NOT:", ~e);                     // -6 (inverts bits)
console.log("Left Shift:", e << 1);         // 10 (1010)
console.log("Right Shift:", e >> 1);        // 2 (0010)

// Ternary Operator
let age = 18;
let isAdult = age >= 18 ? "Adult" : "Minor";
console.log("Ternary Operator:", isAdult);  // Adult

// typeof Operator
console.log("Type of a:", typeof a);        // number
console.log("Type of c:", typeof c);        // boolean
console.log("Type of x:", typeof x);        // number