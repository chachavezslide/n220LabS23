//---In lab:---//
//The application below *should* be drawing a line from the last place the user clicked, to the current mouse location.  However, someone (me) broke it, left it poorly commented, and gave it terrible variable names. So that you may learn.

//In a group:

//Identify the syntax errors and fix them
//Identify any logic errors and fix them
//Figure out what the algorithm is doing and comment it (one comment for every line of code)
//Change the variable names to make sense
//While working, use your debug strategies:

//Comment out large sections of code to focus on individual variables or lines at a time
//Use the console to print out variable values
//Rely on feedback from the console to fix errors
//Reference code you know works to identify why this code looks different / isn't working.
 
//-- Variables--//

let start= { x: 0, y: 0 };


//--setup--//
function setup(){
    createCanvas(400, 400);
}

//--line start stop--//
//--line drawn from startpoint to point clicked --//
function draw() {
 background(220);

  if(mouseIsPressed) {
   start.x = mouseX;
   start.y = mouseY;
 }
  
  let pen = distance( start, { x: mouseX, y: mouseY }); //zah changed to length
  
  if(pen > 120) {
    stroke("#FF0000"); //missing {}
  } else {          //unecessary "if statement"
    stroke("#000000"); // missing quotes
}
  
  line(start.x, start.y, mouseX, mouseY); //missing comma, "moose"
}

function distance(p1, p2) {
  
 let dx = p1.x - p2.x;
 let dy = p1.y - p2.y;
  
  //return the distance
 return Math.sqrt(dx*dx + dy*dy);
}
