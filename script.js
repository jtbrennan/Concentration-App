var pos = 0; 
var box = document.getElementById('box');
var t = setInterval(move, 10);
var counter = 0


function move(){
  if(pos >= 450) {
    counter += 1;
  };
  
  if(counter == 1){
    pos -= 3;
    box.style.left = pos+'px';
  };
  
  if(pos <= 1 && counter == 1){
    counter -= 1;  
  };
    
  if(counter == 0){
    pos += 3;
    box.style.left = pos+'px';
  };
  

}
var startCounter = 0
function start(){
  if (startCounter == 1){
    t = setInterval(move, 10);
    startCounter = 0;
  }
}

function stop(){
  clearInterval(t);
  startCounter += 1;
}

