//-----------------algorithm plan-------------------//

//--------------------------------------2 - Reverse Tennis (?)-----------------------//

//Create two objects with properties for the x, y, width,
// and height for a 'tall' rectangle. Set their 'x' properties so that when drawn, 
//one will appear on the left side of the composition, and the other on the right side.


//In the draw function,

//draw both of the rectangles in the objects to the screen, based on their properties
//if the up key is pressed, make the first object move up, and the second object move down
//if the down key is pressed, make the first object move down, and the other object move up 

//sample code

// if (keyIsDown(UP_ARROW)) {
    //change properties
//}

//---plan 2--//

//object 1
let racquetA = {x:100, y:100, height:100, width:20,}

//object 2
let racquetB = {x:880, y:100, height:100, width:20,}
//}
function setup(){
createCanvas(1000,500);
background(10,10,10);
}

function draw(){
fill(0,255,0);
background(10,10,10);

if (keyIsDown(UP_ARROW)){
    racquetA.y-=1; //left racquet up
    racquetB.y+=1; //right racquet down
 } 

 if (keyIsDown(DOWN_ARROW)){
    racquetA.y+=1;//left racquet down
    racquetB.y-=1;//right racquet up
 }

rect(racquetA.x, racquetA.y, racquetA.width, racquetA.height); //left racquet
rect(racquetB.x, racquetB.y, racquetB.width, racquetB.height); //right racquet
}

// If up key (UP_ARROW) is pressed = rectangleA goes up, rectangleB goes down.

//run a function with the parameter (up_arrow)?
//rectangleA.x //rectangleA.y + unknown y value
//rectangleB.x //rectangleB.y - unknown y value

//If down key (DOWN_ARROW) is pressed= rectangleA goes down, rectangleB goes up.
