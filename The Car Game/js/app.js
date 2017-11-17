var canvas, canvasContext;
var blueCar = new carClass("Blue marine");
var pinkCar = new carClass("Pink pony");

var tempFlag = true;
var lapsLeft = 3;
var startCount = 3;
var canStart = false;

var blueMarine = document.querySelector('.blue-marine span');
var pinkPony = document.querySelector('.pink-pony span');
var winner = document.querySelector('.winner p');
var laps = document.querySelector('.laps span');
var start = document.querySelector('.start span');

window.onload = function() {

  canvas = document.querySelector('canvas');

  //size of canvas
  canvas.width = "800";
  canvas.height = "600";

  // position of canvasmain.style.left = "100px";
  canvas.style.top = "150px";
  canvas.style.left = "500px";
  canvas.style.position = "absolute";


  canvasContext = canvas.getContext('2d');


var input = document.getElementById("input");
var add;

function startT() {
    add = setInterval(function () {
      if(startCount >=0 ){
        start.innerText = startCount;
        startCount--;
      }else {
        start.innerText = "GO!";
        canStart = true;
        clearInterval(add);
      }
    }, 1000);
}

startT();

  // setInterval(function(){
  //   start.innerText = startCount;
  //   startCount--;
  //   if(startCount == -1) return false;
  // },1000);
  // clearInterval(thisInt);

  var framesPerSecond = 30;
  setInterval(updateAll, 1000/framesPerSecond);

  setupInput();
  trackLoadImages();
  carImageLoad();

  // helpful map
  // tempMap(trackGrid_1);

    blueCar.reset(carPic);
    pinkCar.reset(pinkCarPic);

}
// doesnt work :'(
// function tempMap(curr){
//   trackGrid = curr.slice();
//   blueCar.reset(carPic);
//   pinkCar.reset(pinkCarPic);
// }

  function updateAll(){
    moveAll();
    drawAll();
  }

  function moveAll(){
    blueCar.move();
    pinkCar.move();
  }

  function drawAll(){
    drawTracks();
    blueCar.draw();
    pinkCar.draw();
  }
















////
