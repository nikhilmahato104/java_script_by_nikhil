console.log("Array The Data Structure");

    // let student1 = "Nikhil";
    // let student2 = "Akash";
    // let student3 = "vishal";


    let name = ["Nikhil","Akash","Vishal"];  //declear the array
    // alert("hi");
    

//creating array

let marks = [1,2,3,4];

let names = ["nikhil" ,"mahato" ,"akash"];

let empty_array = [];  //empty array

let info =["nikhil" ,20,80.80]  //mixed array

//array.length

console.log("the length of info " , info.length);

//index accecing

console.log(info[0]);   //nikhil

console.log(info[0][0]); //n

console.log(info[0].length); //6    //nikhil ka length




//ARRAY ARE MUTABLE        mutable

let mutable = ["a","b","c"];

console.log(mutable);

mutable[0] = "A","B";

console.log(mutable);

//str                   not mutable

let str = "NIKHIL MAHATO";

console.log(str);
let new_str = str.toLowerCase();
console.log(new_str);
console.log(str);



//ARRAY METHOD   


// how shift method is use

//follower of my instagram account
let insta_followers = ["Prity" , "Komal" , "Neha" ,"Anamika"];
document.write(insta_followers,"<br>")
//now  do block prity and print blockuser
let blocked = insta_followers.shift();
document.write(insta_followers,"<br>")
document.write(blocked,"<br>");



// how unshift method is use

document.write("<br>","........................")


let fb_follower = ["Prity" , "Komal" , "Neha" ,"Anamika"];
document.write("<br>",fb_follower);
let add_follwer = fb_follower.unshift("kiran","hiran");

document.write("<br>",fb_follower);


document.write("<br>",add_follwer);


document.write("<br>","....................................................................................");





