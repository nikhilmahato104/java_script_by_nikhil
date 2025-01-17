// alert("linking check")

//create new para element
let para = document.createElement("p");
para.innerText = "This is a new para element";

//append para element to body
document.body.appendChild(para);


//create new h1 element
let h1 = document.createElement("h1");
h1.innerText = "This is a new h1 element";
//append h1 element to body
document.body.appendChild(h1);


//create new img element
let img = document.createElement("img");
img.src = "img2.jpg";
//append img element to body
document.body.appendChild(img);
//set style on img
img.style.width = "200px";
img.style.height = "200px";
img.style.border = "2px solid red";
img.style.borderRadius = "20px";
//create new div element
let div = document.createElement("div");
div.innerText = "This is a new div element";
//append div element to body
document.body.appendChild(div);
//set style on div
div.style.width = "200px";
div.style.height = "200px";
div.style.border = "2px solid red";
div.style.borderRadius = "5px";