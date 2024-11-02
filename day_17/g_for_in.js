{
    let student = {
        name : "Nikhil Mahato",
        age : 20,
        cgpa : 7.5,
        isPass :true
    };

    for(let key in student)
    {
        console.log("key is",key ,"value is ",student[key]);
    }
}

// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

{
    let arr = [1,2,3,4,5,6]
    let num = 5;

    for(let i = 0;i<=arr.length-1;i++)
    {
        if(arr[i]==num)
        {
            arr.splice(arr[i-1],1)
            console.log(arr);
        }
    }
}

{
    let num = [1,2,3,4,5];
    let sum = 0;
    for(let i = 0 ;i<=num.length-1;i++)
    {
        
        sum = sum + num[i]
        
    }
    console.log(sum);
    
   
}

//largest number in array
{
    let arr = [100,4,6,11,120,1];
    let largest = 0;
    let n ;
    for(let i = 0 ;i<arr.length;i++)
    {
        if(largest<arr[i])
        {
            largest = arr[i];
            
        }
         
    }
    console.log(largest);
   
    

}
