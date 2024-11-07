const student = {
    name : "komal",
    age : 19,
    eng :90,
    math :81,
    phy :90,

    getAvg() {
        let avg = (this.eng+this.math+this.phy)/3;
        console.log(avg);
    }
}
console.log(student.getAvg());

console.log(this);