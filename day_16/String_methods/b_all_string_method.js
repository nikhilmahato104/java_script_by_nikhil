const str = "Hello, JavaScript World!";

// High-Importance Methods
console.log(str.charAt(1));                   // e
console.log(str.charCodeAt(1));               // 101
console.log(str.concat(" It's amazing!"));    // Hello, JavaScript World! It's amazing!
console.log(str.includes("JavaScript"));      // true
console.log(str.indexOf("World"));            // 18
console.log(str.lastIndexOf("o"));            // 21
console.log(str.slice(7, 17));                // JavaScript
console.log(str.substring(7, 17));            // JavaScript
console.log(str.substr(7, 10));               // JavaScript
console.log(str.toUpperCase());               // HELLO, JAVASCRIPT WORLD!
console.log(str.toLowerCase());               // hello, javascript world!
console.log("   trim me   ".trim());          // trim me
console.log(str.split(" "));                  // [ 'Hello,', 'JavaScript', 'World!' ]
console.log(str.replace("World", "Universe")); // Hello, JavaScript Universe!
console.log(str.replaceAll("o", "O"));        // HellO, JavaScript WOrld!
console.log(str.match(/JavaScript/));         // [ 'JavaScript', index: 7, ... ]
console.log([...str.matchAll(/o/g)]);         // [ ['o'], ['o'], ['o'] ]
console.log(str.search(/World/));             // 18
console.log(str.startsWith("Hello"));         // true
console.log(str.endsWith("World!"));          // true

// Lower-Importance Methods
console.log("5".padStart(3, "0"));            // 005
console.log("5".padEnd(3, "0"));              // 500
console.log((123).toString());                // 123
console.log(new String("hello").valueOf());   // hello
console.log("a".localeCompare("b"));          // -1
console.log("Ha!".repeat(3));                 // Ha!Ha!Ha!
console.log("😊".codePointAt(0));             // 128522
console.log("é".normalize("NFD"));            // é

// HTML Manipulation (Rarely Used)
console.log("hello".anchor("greeting"));      // <a name="greeting">hello</a>
console.log("hello".big());                   // <big>hello</big>
console.log("hello".bold());                  // <b>hello</b>
console.log("hello".italics());               // <i>hello</i>
console.log("hello".strike());                // <strike>hello</strike>
console.log("hello".small());                 // <small>hello</small>
console.log("hello".sup());                   // <sup>hello</sup>
console.log("hello".sub());                   // <sub>hello</sub>
