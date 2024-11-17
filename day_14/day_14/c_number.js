{
    a=0.9999999999999999;
    b=1;
    console.log(a+b);

    //ans is 2
}


// Primitive Types
console.log("Primitive Types:");
console.log("\n");
console.log(typeof "Hello");          // string
console.log(typeof 42);               // number
console.log(typeof 9007199254740991n); // bigint
console.log(typeof true);             // boolean
console.log(typeof undefined);        // undefined
console.log(typeof null);             // object (quirk in JS)
console.log(typeof Symbol("id"));    // symbol
console.log(typeof function() {});    // function

// Non-Primitive Types (Objects)
console.log("\nNon-Primitive Types (Objects):");
console.log(typeof { name: "John" });  // object
console.log(Array.isArray([1, 2, 3]));  // true (checks if it's an array)
console.log(typeof [1, 2, 3]);         // object
console.log(typeof new Date());        // object
console.log(typeof /abc/);             // object (RegExp is considered an object)
console.log(typeof new Map());         // object
console.log(typeof new Set());         // object
console.log(typeof new WeakMap());     // object
console.log(typeof new WeakSet());     // object
console.log(typeof new ArrayBuffer(16)); // object

// Additional test for checking functions, arrays, and other complex objects
console.log("\nAdditional Type Checks:");
console.log(typeof new Function());   // function (Note: Functions are a special type of object)
console.log(typeof new Array());      // object (arrays are technically objects)
console.log(Array.isArray(new Array())); // true
console.log(typeof new RegExp("abc")); // object





let x = BigInt("12555125441544152152415412415415152152151521202");
console.log("THE TYPE OF X IS : - ",typeof(x),`THE VALUE OF  X IS ${x} `);



//Type of NaN
console.log("\n");
console.log("..............number.................");
console.log(2**2**2**2**2)   //Infinity



