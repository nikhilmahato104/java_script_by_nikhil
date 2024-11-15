let a = [1, 2, 3, 4, 5];

let b = a.every((el) => 
  el % 2 == 0
);

console.log(b); //false

let c = [2, 4, 6, 8];

let d = c.every((el) => 
  el % 2 == 0
);

console.log(d); //true


