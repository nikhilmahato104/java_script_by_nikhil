const str = "Hello, JavaScript World!";
           //012345678901234567890123    // Indexes



// High-Importance Methods.........................................................//
str.charAt(1);                   // "e"
str.charCodeAt(1);               // 101
str.concat(" It's amazing!");    // "Hello, JavaScript World! It's amazing!"       
str.includes("JavaScript");      // true                                           
str.indexOf("World");            // 18
str.lastIndexOf("o");            // 21
str.slice(7, 17);                // "JavaScript"
str.substring(7, 17);            // "JavaScript"
str.substr(7, 10);               // "JavaScript" (Deprecated)
str.toUpperCase();               // "HELLO, JAVASCRIPT WORLD!"
str.toLowerCase();               // "hello, javascript world!"
"   trim me   ".trim();          // "trim me"
str.split(" ");                  // ["Hello,", "JavaScript", "World!"]
str.replace("World", "Universe");// "Hello, JavaScript Universe!"
str.replaceAll("o", "O");        // "HellO, JavaScript WOrld!"
str.match(/JavaScript/);         // ["JavaScript", index: 7, ...]
[...str.matchAll(/o/g)];         // [["o"], ["o"], ["o"]]
str.search(/World/);             // 18
str.startsWith("Hello");         // true
str.endsWith("World!");          // true
// .............................................................................//






// Lower-Importance Methods
"5".padStart(3, "0");            // "005"
"5".padEnd(3, "0");              // "500"
(123).toString();                // "123"
new String("hello").valueOf();   // "hello"
"a".localeCompare("b");          // -1
"Ha!".repeat(3);                 // "Ha!Ha!Ha!"
"😊".codePointAt(0);             // 128522
"é".normalize("NFD");            // "é"

// HTML Manipulation (Rarely Used)
"hello".anchor("greeting");      // "<a name="greeting">hello</a>"
"hello".big();                   // "<big>hello</big>"
"hello".bold();                  // "<b>hello</b>"
"hello".italics();               // "<i>hello</i>"
"hello".strike();                // "<strike>hello</strike>"
"hello".small();                 // "<small>hello</small>"
"hello".sup();                   // "<sup>hello</sup>"
"hello".sub();                   // "<sub>hello</sub>"
