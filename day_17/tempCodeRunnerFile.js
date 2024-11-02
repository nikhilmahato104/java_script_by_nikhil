{
    let arr = [10,4,6,11,100,1];
    let largest = 0;
    for(let i = 0 ;i<arr.length;i++)
    {
        if(largest<arr[i])
        {
            largest = arr[i];
        }
    }
    console.log(largest);

}