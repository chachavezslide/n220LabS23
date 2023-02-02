//This assignment will have you focus on abstracting blocks of code
// into functions. For many of these assignments,
//you might easily accomplish the result without a function,
//but the goal is for you to practice identifying where code might 
//be placed into a function so that it can be either reused or make your
// code more readable. While practicing, 
// you will need to master concepts of defining functions,
//invoking functions, and returning variables  from functions.

//It is likely that you will encounter bugs in your code 
//as you work, or struggle with producing the application. 
//This is normal and expected 
//- debugging and re-thinking are part of process. 
//Remember to start early, focus on your algorithm,
// and think about what data you need, where that data exists,
// and how that data changes over time.

//It is expected that you do this work without referencing material
// beyond those employed in the class. 
//(i.e., not using stack overflow or other resources
// to find exact solutions to the problems posed).

//--function one instruction--//

//Create a composition of some object - a car, a rocket, a set of keys.
//Move that composition code into a new function 
//("drawKeys()", for instance).
//Add two arguments to the function (x and y)
//Use those arguments to control the position of each of the
// drawing calls in the function (things like rect() and circle())

//Finally, either:
//Place the function call in the draw() function, 
//and have your composition follow mouseX and mouseY ||

//Draw 3+ of your compositions in different spaces on the screen 
//by writing your function call three or more times in either 
//setup() or draw()

//---------------------------------------------------------------//
//-- F1 Drawing Drawer--//

        //variables n objects
//var 
var drawRocket;
var drawCircle;
        //functions
function setup(){
    createCanvas (900,900);
    background(10,10,10);
    //add arguments 
       
}
function draw(){
     //set following draw function to mouseX mouseY
     //---------------------------FUNCTION 1 - DRAWING DRAWER-------------------//
     background(10,10,10);
     fill(170, 200, 150);
     drawRocket(mouseX, mouseY);  //rename drawComp based on resulting composition
        
     
    //drawCircle(500, 500);        


     //---------------------------FUNCTION 3 - POLAR POINT-------------------//

}

function drawRocket(x,y){
    translate(x, y); // translate composition to equal given x and y values.
    
    beginShape(); //stablizers 
    vertex(-25,80);
    vertex(25,80);
    vertex(0,60);
    endShape(CLOSE);

    rect(-10,20,20,60); //body

    beginShape(); //t0p cone
    vertex(0,0);
    vertex(-17,40);
    vertex(17,40);
    endShape(CLOSE);

    fill(250,250,250);
    ellipse(0,50,10,10); //window
}
    



//function drawCircle(){
    //colorVaribleArgumentName.setRed(0);
    //fill(170, 200, 150);
    //circle( 10, 10, 300, 300);
    //let noRed = removeRed( color(170, 200, 150) ); 
//}



//--------------------------------------------------------//
//--function 2 Instruction--//

//Write a function that

//takes a color as an argument ( you can use color(170, 200, 150) )
//sets the red component of that color to zero  ( colorVariableArgumentName.setRed(0) )
//Returns that new color without red
//Then, test this function by drawing a circle to the screen using the result. You might have something like:
//let noRed = removeRed( color(170, 200, 150) );

//fill(noRed);

//if red, then not red

//drawCircle(){
// colorVaribleArgumentName.setRed(0);
// fill(170, 200, 150);
// let noRed = removeRed( color(170, 200, 150) );
//
//
//}


//draw circle

//------------------------------------------------------------------//
//--F2 Red Remover--//

// Should I set this assignment up as 3 pages as with before? 
//That or create a new block of code for each

    

//--------------------------------------------------------------//
//--function 3 Instructions--//

//Polar coordinates are coordinates on a circle, rather than on a cartesian grid. They can be calculated by taking the sin and cosine of a number. For this exercise, you will write a function that calculates polar coordinates and returns a value that will be used to draw a circle at those coordinates.

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

//-----------------------------------------------------------------

//--F3 Polar Points--//

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
//}