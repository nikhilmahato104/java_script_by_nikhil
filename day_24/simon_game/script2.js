//step 1 store user sequience and game sequence and btns
gameSeq = [];
userSeq = [];
let btns = ["yellow", "red", "purple", "green"];

//step 2 press key to start
let started = false;
let level = 0;
 let stbtn = document.getElementById("start-btn");
stbtn.addEventListener("click", function (event) {
  if (started == false) {
    console.log("game started");
    stbtn.innerText = "game running";
    started = true;
    levelUp();
  }
});

//step 3 function of levelUp when start level = 1
let h2 = document.querySelector("h2");
function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;

  //flashing randdom button + calling step 4 when game started
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlase(randBtn);
}

//step 4 when game started than one color should flash white by computer
function gameFlase(btn) {
  btn.classList.add("gameFlash");
  setTimeout(function () {
    btn.classList.remove("gameFlash");
  }, 300);
}

//step 5 when btn is press by user flashing
function btnPress() {
    let btn = this;
    console.log(this)
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}



//user flash
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

//select the one of 4 button that user press
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}


//step 6 check   userSeq and  GameSeq match or not
function checkAns(idx){
    console.log(`current level is ${level}`);
    console.log("idex is ",idx);
    if(userSeq[idx] === gameSeq[idx]){
      if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
      }
        console.log("same value");
    }

    else {
      h2.innerText = `Game over! click Re-start to start your level is ${level}`;
      document.body.style.backgroundColor = "red"; // Set the background color to red
     
      setTimeout(() => {
          document.body.style.backgroundColor = ""; // Reset the background color after 1 second
      }, 250);
      reset();
       
  }
  
}

function reset(){
  started = false;
  userSeq = [];
  gameSeq = [];
  level = 0;
  stbtn.innerText = "Re-start";
}