const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;



var mouseX = 0;
var mouseY = 0;

function setupInput(){
  canvas.addEventListener('mousemove', updateMousePos);

  document.addEventListener('keydown', keyPressed);
  document.addEventListener('keyup', keyReleased);

  pinkCar.setupInput(KEY_UP_ARROW, KEY_RIGHT_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW);
  blueCar.setupInput(KEY_W, KEY_D, KEY_S, KEY_A);
}

function updateMousePos(evt){
  // var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;

  // mouseX = evt.clientX - rect.left - root.scrollLeft;
  mouseX = evt.clientX;
  // mouseY = evt.clientY - rect.top - root.scrollTop;
  mouseY = evt.clientY;


  // cheat / hack to test car in any position
  /*
  carX = mouseX;
  carY = mouseY;
  carSpeedX = 4;
  carSpeedY = -4; */
}

function keySet(keyEvent, whichCar, setTo){
  // console.log("Key pressed: " + evt.keyCode);
  if(keyEvent.keyCode == whichCar.controlKeyLeft){    //turn left
    whichCar.keyHeld_TurnLeft = setTo;
  }
  if(keyEvent.keyCode == whichCar.controlKeyRight){  //turn right
    whichCar.keyHeld_TurnRight = setTo;
  }
  if(keyEvent.keyCode == whichCar.controlKeyUp){    // acceleration
    whichCar.keyHeld_Gas = setTo;
  }
  if(keyEvent.keyCode == whichCar.controlKeyDown){  //braking
    whichCar.keyHeld_Reverse = setTo;
  }
}

// steering on
function keyPressed(evt){
  // console.log("Key pressed: " + evt.keyCode);
  keySet(evt, blueCar, true);
  keySet(evt, pinkCar, true);
  evt.preventDefault(); //prevents arrows from scrolling page
}

//steering on release
function keyReleased(evt){
  // console.log("Key released: " + evt.keyCode);
  keySet(evt, blueCar, false);
  keySet(evt, pinkCar, false);
}













///
