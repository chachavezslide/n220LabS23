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
//  );

//variables
    //??

//function draw(){
//background()
//fill(170, 200, 150);
//circle() 
let redVal; // red value

function setup(){ 
    createCanvas(900,900); // setup
    background(10,10,10);

    let redVal = removeRed(color(170,200,150));  //red value runs removeRed, which sets the red value to 0 (color as parameter)

    fill(redVal); //fill for given red value
}

function draw(){
    ellipse(300,300,500,500); //test redRemover 
}

function removeRed(noRed){ //sends the result of removeRed (which is noRed.setRed(0)) back to the initial instance of removeRed();
noRed.setRed(0);
return noRed; 
}