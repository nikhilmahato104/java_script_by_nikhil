//10 MOST string methods in js.
let str = "    NIkhil    ";
console.log(str);

//str.trim()
// console.log(str.trim());               1
a = str.trim();
console.log(a);
console.log(str);
console.log(str.trim());

//str.lastIndexOf()   and str.indexOf()    2
let str1 = "ABCDA";
console.log(str1.lastIndexOf("A"));
console.log(str1.indexOf("A"));

//str.toUppercase() and str.toLowercase()   2
let str2 = "Nikhil mahato";
console.log(str2.toLocaleLowerCase());
console.log(str2.toLocaleUpperCase());

//str.slice(numer)                               1
let str3 = "ILOVECODING";
console.log(str3.length);
console.log(str3.slice(0)); //ILOVECODING
console.log(str3.slice(1)); //LOVECODING
console.log(str3.slice(2)); //OVECODING
console.log(str3.slice(3)); //VECODING
console.log(str3.slice(4)); //ECODING
console.log(str3.slice(5)); //CODING
console.log(str3.slice(6)); //ODING
console.log(str3.slice(7)); //DING
console.log(str3.slice(8)); //ING
console.log(str3.slice(9)); //NG
console.log(str3.slice(10)); //G
console.log(str3.slice(11)); //

console.log(str3); //ILOVECODING   {string are immutable in js}

//str.slice(number,number)
console.log(str3.slice(1, 4)); //LOV

//str.slice(-number)    == str.slice(length-num)
console.log(str3.slice(-4)); //DING  {11-4 = 7}
console.log(str3.slice(7)); //DING {}

let b = str3.slice(-4);
console.log("b is :",b);   //b is : DING


//srt.replace()                                   1
let str4 = "ILOVECODING";
console.log(str4.replace("LOVE","DO"));  //IDOCODING

//str.repeat(number)                              1
let str5 = "NIKHIL";
console.log(str5.repeat(2));            //NIKHILNIKHIL


//str.concat                                       1
str6 = "HI";
console.log(str6.concat(" It's amazing!"));   //HI It's amazing!


//str.charat(1)                                    1
console.log(str6.charAt(1));                   //   I
