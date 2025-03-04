const screen= document.querySelector('input');
const aud= document.querySelector('audio');
screen.disabled =true;


function pressed(val){
    screen.value +=val;
    aud.src = "press.mp3";
    aud.play();
}

function result(){
  if(screen.value.length != 0){
    screen.value = eval(screen.value);
    aud.src = "result.mp3" ;
    aud.play();
  }
}

function clr(){
    screen.value = "";
    aud.src = "erase.mp3";
    aud.play();
}

function del(){
  screen.value = screen.value.slice(0,screen.value.length-1);
    aud.src = "erase.mp3";
    aud.play();
}


