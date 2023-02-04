//-----------------algorithm plan-------------------//

//----------------------------1 - Data-driven display w/ function-----------------------------------//

//Make an object with all the properties for a graphic on the screen
// - width, height, color, position. 
//These numbers could represent positions of wheels ,eye colors, or rainbow lengths.
// In your create or draw function draw that object to the screen using the data in your object - 
//using a series of fill commands, draw commands, and whatever else you need to draw the object to the screen.
// Try to not hard-code any numbers in the drawing commands - only use the object properties to set sizes, colors, or position.

//The, create a function that takes one argument and draws an object to the screen using that object argument. 
//Pass your object to that function as an argument, and have the function draw the object to the screen. An example function is below:

//function drawRocket( rocketObject ) {
  //    rect(rocketObject.x, rocketObject.y, rocketObject.width, rocketObject.height);
//}

//---plan 1--//

//object

//let objectNamePlaceholder = {
  //object width
  //object height
  //object color
  //object position
//}


//function setup(){
  //createCanvas()
//}

//draw function
    //object is the parameter.
//




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
//let rectangleA = {
//object x
//object y  
//object width
  
//}


//object 2
//let rectangleB = {
  //object x
  //object y
//object width

//}

//function draw(){

// If up key (UP_ARROW) is pressed = rectangleA goes up, rectangleB goes down.

//run a function with the parameter (up_arrow)?
//rectangleA.x //rectangleA.y + unknown y value
//rectangleB.x //rectangleB.y - unknown y value

//If down key (DOWN_ARROW) is pressed= rectangleA goes down, rectangleB goes up.

//}



//---------------3 - Bouncing Ball / World Wrap Refactor----------------------------------//

//Take your ball bounce or world wrap assignment and recode it using an object
// to store the ball's size, color, and velocity. No global variables or hardcoded values 
//should be used in your update function.


//turn ball into object
//object properties
    //object width
    //object height
    //object color
    //object speed    // would this be an equation?
//insert ball bounce assignment code here.

//---plan 3--//