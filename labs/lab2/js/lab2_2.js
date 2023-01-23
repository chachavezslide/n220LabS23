//Make a canvas 800 px x 600 px //Side note, why was "with" highlighted purple? is that conditional or something?
//Create a sketch with a circle moving left and down at 5px per update. This speed should be stored as separate speed variables in your code (this is required to solve this problem).
//Assume a 'world bounds' for this object to be 800x6
//When the ball reaches the edge of the bounds, bounce it by multiplying the associated velocity variable by *= -1, to make the ball be moving in the opposite direction. If you have found a hit on the right or left bounds, it should be the x velocity variable you are modifying. If its on the top or bottom bounds, you should be modifying the y velocity variable.


var radius = 40;
var x = radius;
var speed = 5;
var direction = 1;
var y = radius + radius;


function setup(){
createCanvas(800, 600);
//world bounds here?
ellipseMode(RADIUS);
}
function draw(){
    background(0);
    x += speed * direction; 
    y += speed * direction;
    if ((x > width-radius) || (x < radius)){
        direction = -direction;
     } else { 
        direction = 1;
     }

    if ((y > height-radius) || (y < radius)){
        direction = -direction;
   }
    if ( direction == 1){
        ellipse(x, y , 20, 20 );
    } else { 
        ellipse(x, y , 20, 20 );
    }
    //find out how to change directions so it bounces at an angle rather tha back and forth.
//Not the desired result, though it technically bounces
}
//console.log( )