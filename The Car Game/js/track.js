var wallPic = document.createElement("img");
var roadPic = document.createElement("img");
var finishPic = document.createElement("img");

const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_GAP = 2;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;


/*
0 - road,
1 - walls(collision),
2 - starting point(replaced with road after start) for car 1
3 - starting point for car 2
9 - finish line
*/
var trackGrid = [];
var trackGrid_1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                   1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
                   1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                   1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
                   1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1,
                   1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
                   1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
                   1, 9, 9, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
                   1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
                   1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
                   1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
                   1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
                   1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
                   1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1,
                   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

 var trackGrid_2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
                    1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
                    1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
                    1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
                    1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 9, 1, 0, 0, 1,
                    1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 0, 0, 1,
                    1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 9, 1, 0, 0, 1,
                    1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

 var trackGrid_3 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1,
                    1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1,
                    1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1,
                    1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1,
                    1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1,
                    1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
                    1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,
                    1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
                    1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1,
                    1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
                    1, 1, 1, 9, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
                    1, 1, 1, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const CURR_TRACK = trackGrid_1;
// console.log(CURR_TRACK);
const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;
const TRACK_FINISH_LINE = 9;

function trackLoadImages(){
  roadPic.src = "./images/track_road.png";
  wallPic.src = "./images/track_wall.png";
  finishPic.src = "./images/track_finish.png";
}
//checking type of tile (for winning condition)
function returnTileTypeAtColRow(col, row) {
	if(col >= 0 && col < TRACK_COLS &&
		row >= 0 && row < TRACK_ROWS) {
		 var trackIndexUnderCoord = rowColToArrayIndex(col, row);
		 return CURR_TRACK[trackIndexUnderCoord];
	} else {
		return TRACK_WALL;
	}
}

//checking if there is a wall in a way
function isWallAtColRow(col,row){
  if(col >= 0 && col < TRACK_COLS &&
    row >= 0 && row < TRACK_ROWS){
      var trackIndexUnderCoord = rowColToArrayIndex(col,row);
      return (CURR_TRACK[trackIndexUnderCoord] == TRACK_WALL); //return true if there is coll
    }else {
      return false;
    }
}

// collisions
  function carTrackHandling(whichCar){
    var carTrackCol = Math.floor(whichCar.x / TRACK_W);
    var carTrackRow = Math.floor(whichCar.y / TRACK_H);
    var trackIndexUnderCar = rowColToArrayIndex(carTrackCol,carTrackRow);

    if(carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
      carTrackRow >= 0 && carTrackRow < TRACK_ROWS){
      var tileHere = returnTileTypeAtColRow( carTrackCol,carTrackRow );

      // console.log(tileHere);
      if(tileHere == TRACK_FINISH_LINE) {
        // laps --;
        // console.log(laps);
        if(tempFlag){
          console.log( whichCar.name + "%c  WINS!","color:red;");
          winner.innerText = whichCar.name;
          tempFlag = false;
        }
      }

      if(isWallAtColRow(carTrackCol, carTrackRow)){
        whichCar.counter++;
          console.log(
          whichCar.name +" has: " +
          whichCar.counter + " collisions!"
          );
          if(whichCar.name == "Pink pony"){
            pinkPony.innerText = whichCar.counter;
          }else if(whichCar.name == "Blue marine"){
            blueMarine.innerText = whichCar.counter;
          }

        //to ensure car wont burrow into wall
        whichCar.x -= Math.cos(whichCar.ang) * whichCar.speed;
        whichCar.y -= Math.sin(whichCar.ang) * whichCar.speed;

        whichCar.speed *= -0.5;
      }//end of track found
    }//end of valid col an row
  }//end of carTrackHandling func

//mapping rows and cols into proper index
  function rowColToArrayIndex(col, row){
    return col + TRACK_COLS * row;
  }

  function drawTracks(){

    for(var eachRow=0; eachRow<TRACK_ROWS; eachRow++){
      for(var eachCol=0; eachCol<TRACK_COLS; eachCol++){

        var arraIndex = rowColToArrayIndex(eachCol, eachRow);

        if(CURR_TRACK[arraIndex] == TRACK_ROAD){
          canvasContext.drawImage(roadPic, TRACK_W * eachCol ,TRACK_H * eachRow);
          //colorRect(TRACK_W * eachCol ,TRACK_H * eachRow, TRACK_W - TRACK_GAP, TRACK_H - TRACK_GAP, 'blue'); //old walls
        } else if(CURR_TRACK[arraIndex] == TRACK_WALL){
          canvasContext.drawImage(wallPic, TRACK_W * eachCol ,TRACK_H * eachRow);
        }else if(CURR_TRACK[arraIndex] == TRACK_FINISH_LINE){
          canvasContext.drawImage(finishPic, TRACK_W * eachCol ,TRACK_H * eachRow);
        }
      }//end of for each col/track
    }//end of for each row
  }// end of drawTracks func




  ////
