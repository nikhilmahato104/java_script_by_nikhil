const student1 = {
    name : "aman",
    marks : 95,
    prop : this, //global scope
    getName : function() {
        //console.log(this);   //this refere to student object cause it is use in function
        return  this.name;
    },
    getMarks : () => {
        // console.log(this);
        return this.marks
    },

};
// console.log(student1)
// console.log(student1.getName());   //student1 object{}

// console.log(student1); //aman
// console.log(student1.getName())
// console.log(student1.getMarks())  //undefine

let srt = "iloveyou";
let a = srt.slice(1,4);
console.log(a);






