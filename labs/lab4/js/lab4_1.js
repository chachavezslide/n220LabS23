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
//The DeathStar Plans.
//object: da deathstar
let deathStarBase ={x: 600, y: 600, width: 100, height: 100, color:"#4a4a4a", dish: "#333333"}
//let deathStarDish ={x: deathStarBase-40, y: deathStarBase-40}
function setup (){
createCanvas(1000,1000);
background(0, 0, 0);

}
function draw() {
  background(0,0,0);
  drawDeathStar();
}

function drawDeathStar(){
  fill(deathStarBase.color)
  ellipse(deathStarBase.x, deathStarBase.y, deathStarBase.width, deathStarBase.height);//main deathstar 
  fill(deathStarBase.dish);
  ellipse(deathStarBase.x-20, deathStarBase.y-20, 30,30) //deathstar dish
  
  stroke(0, 255, 0); //laser
  line(deathStarBase.x-15, deathStarBase.y-15, mouseX,mouseY) //laser direction
}


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

