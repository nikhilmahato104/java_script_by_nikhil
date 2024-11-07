const sum = (a, b) => {
  console.log(a + b);

};

sum(2, 3);              //5
sum(1.2, 34.4);          //35.6
console.log(sum(3,3));  //6
console.log(sum);   //[Function: sum]



const cube = (n) => {
    return n*n*n;
}

console.log(cube);



const compare = (a,b) => {
    if(a===b)
    {
        console.log("both number are equal");
    }
    else{
        console.log("number are not equal");
    }
}

compare(1,3)


//implicit Arrow function

const mult = (x,y) => (x*y);

let a  = mult(2,2);
console.log(a);