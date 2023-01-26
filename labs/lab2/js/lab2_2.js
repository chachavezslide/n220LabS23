//Make a canvas 800 px x 600 px //Side note, why was "with" highlighted purple? is that conditional or something?
//Create a sketch with a circle moving left and down at 5px per update. This speed should be stored as separate speed variables in your code (this is required to solve this problem).
//Assume a 'world bounds' for this object to be 800x6
//When the ball reaches the edge of the bounds, bounce it by multiplying the associated velocity variable by *= -1, to make the ball be moving in the opposite direction. If you have found a hit on the right or left bounds, it should be the x velocity variable you are modifying. If its on the top or bottom bounds, you should be modifying the y velocity variable.


var radius = 40;
var x = radius;
var xSpeed = 2.5;
var ySpeed = 2.5;
var y = radius + radius;


function setup(){
createCanvas(800, 600);
//world bounds here?
ellipseMode(RADIUS);
}
function draw(){
   background(0);
   fill( 200, 150, 20);
   ellipse(x, y , 20, 20, 10 );
    x += xSpeed; 
    y += ySpeed;
    if (x > width-radius || x < radius){
        xSpeed = xSpeed * -1;
     } 
     
     //else { 
        //direction = 1;
    // }

    if (y > height-radius || y < radius){
       ySpeed = ySpeed * -1;
   }
   //if (ySpeed = ySpeed * -1){
   // fill( 25, 25, 25);
   //}
   //if ( direction == 1){
       // ellipse(x, y , 20, 20 );
  // } else { 
       
    //}
    //find out how to change directions so it bounces at an angle rather tha back and forth.
//Not the desired result, though it technically bounces
}
//console.log( )

//note
// traveling SE means increase in x coordinate and y coordinate
// To make it travel N means that y coord must be decreasing
//should there be two directions?
//if ((y > height-radius) || (y < radius)) {
// "multiply yDirection by -1, xdirection stays +1"