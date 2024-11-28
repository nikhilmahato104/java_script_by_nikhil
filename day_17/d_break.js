{
    let i = 1;
    while(i< 5)
    {
        if(i==3)
        {
            break;
        }
        console.log(i);
        i++;
    }
    console.log("we use break at 3");

}

//code A
{
    const num = [1,2,300,10,5];
    console.log(num);
    let rev ;
    rev = num; 
    console.log("rev is ",rev);
    
}
//code B
{
    const num = [1,2,300,10,5];
    console.log(num);
    let rev ;
    num = rev;  //throug error    note down
    console.log("rev is ",rev);
    
}

