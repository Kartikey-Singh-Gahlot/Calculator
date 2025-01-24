
const screen= document.getElementById("screen");
const btns= document.querySelectorAll(".mainbtn");
const eql=document.getElementById("eql");
const add=document.getElementById("add");

let state="off";




function result(){


  let str= screen.value;

  if(str.includes("+")){

   let idx=str.indexOf("+");
   let a=Number(str.slice(0,idx));
   let b=Number(str.slice(idx+1, str.length));
   screen.value=a+b;
  }

  if(str.includes("-")){
    let idx=str.indexOf("-");
   let a=Number(str.slice(0,idx));
   let b=Number(str.slice(idx+1, str.length));
   screen.value=a-b;
  }


  if(str.includes("x")){
    let idx=str.indexOf("x");
   let a=Number(str.slice(0,idx));
   let b=Number(str.slice(idx+1, str.length));
   screen.value=a*b;
  }

  if(str.includes("/")){
    let idx=str.indexOf("/");
   let a=Number(str.slice(0,idx));
   let b=Number(str.slice(idx+1, str.length));
   screen.value=a/b;
  }

}


function pressed(num){
  screen.value+= num;
}

function clr(){
  screen.value="";
}


