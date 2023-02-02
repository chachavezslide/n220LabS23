////Polar coordinates are coordinates on a circle, rather than on a cartesian grid. They can be calculated by taking the sin and cosine of a number. For this exercise, you will write a function that calculates polar coordinates and returns a value that will be used to draw a circle at those coordinates.

//For this exercise

//In addition to your setup() and draw() calls, 
//add a new function named polarPoint()
//Add one argument to polar point (r)
//In the polar point function, create an x variable 
//and set it to r * Math.sin(mouseX);
//Create a Y variable, set it to the result of r * Math.cos(mouseX);
//Finally, at the end of the function, write return createVector(x,y); 
//To test this function:

//Set a variable (perhaps res) equal to the result of 
//calling polarPoint() in your draw call
//Add a translate(100,100); line before your drawing methods
//Draw a circle at res.x, res.y, and with a radius of 10.
//(res is technically an 'object',
// which we will learn more about next week)

//function draw(){
//background()
//circle() 
//polarPoint
//
//end result should look like a ring of circles
//}

//this below should be able to create the 
//two lines of values that the circles would be drawn along

//function polarPoint(r){
        //variables
        //x
        //y
    
        // sin and cos. insert some math chicanery here.
    
    //return // returns function back to the top.
        //functions


        //---------------------------FUNCTION 3 - POLAR POINT-------------------//

//let res;
//let r = 10;
function setup(){
    createCanvas (900,900);
    background(10,10,10);
         
}

function draw(){
  translate(100,100);
 // polarPoint();
 let res = polarPoint(60); //polarPoint parameter is doistance from the established center to draw the circles from.
 circle( res.x, res.y, 10); //results of x //results of y // radius 10
}

function polarPoint(r){ // returns createVector(x,y) to polar point. 
//var r = 60;
  var x = r * Math.sin(mouseX);
  var y = r * Math.cos(mouseX);
   createVector(x,y);
   return createVector(x,y);
   
}