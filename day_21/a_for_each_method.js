let arr = [1, 2, 3, 4, 5];

let print = function (el) {
  console.log(el);
};

arr.forEach(print);

console.log("by arrow function");

arr.forEach((el) => {
  console.log(el);
});

//array of object
let arr1 = [
  {
    name: "nikhil",
    marks: 90
  },
  {
    name: "nikhil2",
    marks: 95
  },
  { name: "nikhil3", 
     marks: 98
  },
];

console.log(arr1);

arr1.forEach((student) => {
    console.log("name of student is : ",student.name);
});

arr1.forEach((student) => {
    console.log(`student ${student.name} is got ${student.marks}` );
});
