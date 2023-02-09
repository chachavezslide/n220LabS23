//-----------------algorithm plan-------------------//

//-----ball bounce work------// 

//var radius = 40;
//var x = radius;
//var xSpeed = 2.5;
//var ySpeed = 2.5;
//var y = radius + radius;


//function setup(){
//createCanvas(800, 600);
////world bounds here?
//ellipseMode(RADIUS);
//}
//function draw(){
   //background(0);
  // fill( 200, 150, 20);
  // ellipse(x, y , 20, 20, 10 );
   // x += xSpeed; 
   // y += ySpeed;
   // if (x > width-radius || x < radius){
   //     xSpeed = xSpeed * -1;
   //  } 
     
     //else { 
        //direction = 1;
    // }

   // if (y > height-radius || y < radius){
      // ySpeed = ySpeed * -1;
   //}


//---------------3 - Bouncing Ball / World Wrap Refactor----------------------------------//

//Take your ball bounce or world wrap assignment and recode it using an object
// to store the ball's size, color, and velocity. No global variables or hardcoded values 
//should be used in your update function.

//let deathStarBase ={x: 600, y: 600, width: 100, height: 100, color:"#4a4a4a"}

//var radius = 40;
//var x = radius;
//var xSpeed = 2.5;
//var ySpeed = 2.5;
//var y = radius + radius;

let bouncyBall ={x: 40, y: 40*2, radius: 40, xSpeed: 2.5, ySpeed: 2.5, height:20, width:20, canvasWidth: 800, canvasHeight:600}

function setup(){
   //ball bounds
   createCanvas(800, 600);
   ellipseMode(RADIUS);
   }

   function draw(){
      background(0); //bg color
      fill( 200, 150, 20); //ball color fill
     ellipse(bouncyBall.x, bouncyBall.y , bouncyBall.width, bouncyBall.height, bouncyBall.radius ); //the bouncyBall

      bouncyBall.x += bouncyBall.xSpeed;  //ball x movement
      bouncyBall.y += bouncyBall.ySpeed; //ball y movement // runs at 45 degree angle

         if (bouncyBall.x > 800-bouncyBall.radius || bouncyBall.x < bouncyBall.radius) {
             bouncyBall.xSpeed = bouncyBall.xSpeed * -1; //be mindfull of using the object properties
          }  // controls the original 45 degree left movement
        
       if (bouncyBall.y > 600-bouncyBall.radius || bouncyBall.y < bouncyBall.radius) {
         bouncyBall.ySpeed = bouncyBall.ySpeed * -1; // triggers the bounce, repeats
      }
   }
//turn ball into object
//object properties
    //object width
    //object height
    //object color
    //object speed    // would this be an equation?
//insert ball bounce assignment code here.