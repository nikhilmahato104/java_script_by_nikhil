//arr.shift()
let fb_follower = ["nikhil","akash","rahul","bishal"];
console.log("follwers are : ", fb_follower); //follwers are :  [ 'nikhil', 'akash', 'rahul', 'bishal' ]
let block_user = fb_follower.shift();
console.log("blocked user is : ", block_user );//blocked user is :  nikhil
console.log("remaing user are : ", fb_follower);//remaing user are :  [ 'akash', 'rahul', 'bishal' ]

console.log("..................................");

//arr.unshift()
let fb_follower1 = ["nikhil","akash","rahul","bishal"];
console.log("follwers are : ", fb_follower1); //follwers are :  [ 'nikhil', 'akash', 'rahul', 'bishal' ]
let add_user = fb_follower1.unshift("kiran","hiran");
console.log("add user is : ", add_user );//add user is :  6
console.log("remaing user are : ", fb_follower1);//remaing user are :  [ 'kiran', 'hiran', 'nikhil', 'akash', 'rahul', 'bishal' ]

console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");
// arr.slice()
let num = [1,2,3,4,5,6,7,8,9,10];
console.log(num.slice(2,5));//[ 3, 4, 5 ]
console.log(num.slice(2));//[ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(num.slice(-3));//[ 8, 9, 10 ]
console.log(num.slice(-5,-2));//[ 6, 7, 8 ]
console.log(num.slice(-10));//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(num.slice(-10,-5));//[ 1, 2, 3, 4, 5 ]
console.log(num.slice(2,-5));//[ 3, 4, 5 ]
console.log(num.slice(2,-2));//[ 3, 4, 5, 6, 7, 8 ]
console.log(num.slice(2,-10));//[ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(num.slice(2,-12));//[]
console.log(num.slice(-2,5));//[]
console.log(num.slice(-2,-5));//[]
console.log(num.slice(-2,-12));//[]
console.log(num);// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]  NOT CHNAGE ORIGINAL ARRAY

console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");
// arr.splice()
let num1 = [1,2,3,4,5,6,7,8,9,10];
console.log(num1.splice(2,5));//[ 3, 4, 5, 6, 7 ]
console.log(num1);//[ 1, 2, 8, 9, 10 ]  CHANGE ORIGINAL ARRAY