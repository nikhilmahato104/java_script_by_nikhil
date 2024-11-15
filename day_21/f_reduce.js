let nums = [1,2,3,4];

let finalVal = nums.reduce((res,el) => res + el) 

console.log(finalVal);


//finding maximum in array

let array = [2,3,4,5,6,78,9,20,2,3,5];

let maxArr = array.reduce((max,el)=> {
    if(el>max){
        return el;
    }
    else{
        return max;
    }
});

console.log(maxArr);

