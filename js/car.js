// console.log("say hello");

var pinkCarPic = document.createElement("img");
var carPic = document.createElement("img");
var carPicLoaded = false;

const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.05;
const MIN_SPEED_TO_TURN = 0.5;

function carImageLoad(){
  carPic.onload = function(){
    carPicLoaded = true;
  }
  carPic.src = "./images/player1car.png";
  pinkCarPic.src = "./images/endriuCar.png";
}

function carClass(name){

  this.name = name;
  this.counter = 0;
  this.lifes = 3;

  this.x = 75;
  this.y = 75;
  this.speed = 0;
  this.ang = 0;
  this.myCarPic; //which picture to use

  this.keyHeld_Gas = false;
  this.keyHeld_Reverse = false;
  this.keyHeld_TurnLeft = false;
  this.keyHeld_TurnRight = false;


  this.setupInput = function(upKey, rightKey, downKey, leftKey){
    this.controlKeyUp = upKey;
    this.controlKeyRight = rightKey;
    this.controlKeyDown = downKey;
    this.controlKeyLeft = leftKey;
  }

  this.reset = function(whichImage) {
    this.myCarPic = whichImage;
    for(eachRow=0; eachRow<TRACK_ROWS; eachRow++){
      for(var eachCol=0; eachCol<TRACK_COLS; eachCol++){
        var arraIndex = rowColToArrayIndex(eachCol, eachRow);
        if(CURR_TRACK[arraIndex] == TRACK_PLAYERSTART){
          CURR_TRACK[arraIndex] = TRACK_ROAD;
          this.ang= -Math.PI/2;
          this.x = eachCol * TRACK_W + TRACK_W/2;
          this.y = eachRow * TRACK_H + TRACK_H/2;
          return;
        }
      }
    }
  }

  this.move = function(){

    if(canStart){

      this.speed *= GROUNDSPEED_DECAY_MULT; //slow down on iddle

      if(this.keyHeld_Gas){
        this.speed += DRIVE_POWER;
      }
      if(this.keyHeld_Reverse){
        this.speed -= REVERSE_POWER;
      }
      if(Math.abs(this.speed) > MIN_SPEED_TO_TURN){

        if(this.keyHeld_TurnLeft){
          this.ang -= TURN_RATE;
        }
        if(this.keyHeld_TurnRight){
          this.ang += TURN_RATE;
        }
      }

      this.x += Math.cos(this.ang) * this.speed;
      this.y += Math.sin(this.ang) * this.speed;

      carTrackHandling(this);
    } //end of move function

    //car drawing
    this.draw = function(){
      if(carPicLoaded){
        drawBitmapCenteredWithRotation(this.myCarPic, this.x, this.y, this.ang)
      }
    }
    }

}



////
