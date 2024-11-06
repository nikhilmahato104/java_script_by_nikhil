{
    const student = {
        name : "NIKHIL MAHATO",
        age : 20,
        cgpa : 7.5,
        isPass : false
    }

    console.log(student);
    console.log("The Type Of Student is : ",typeof(student));
    console.log(student);


    console.log(student.name);  //get value

    console.log(student["name"])  //get value

    let prop = "age";
    console.log(student[prop]);  // in this case we use [" "];
    console.log(student.prop);  //undefine 


}


{
    
    const obj = {
        1:"a",
        2:"b",
        true :"c",
        null :"d",
        undefined : "e"
    };

    console.log(obj);
    console.log(obj[1]);  //a
    console.log(obj["1"]);  //a
    console.log(obj[null]);  // d  

}


