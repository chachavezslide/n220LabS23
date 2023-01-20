//Assignment
//Using P5 and JavaScript, create an image of your choosing.

//Use at least five drawing methods (circle, fill, stroke...) and two variables in your composition.

//test

function setup () {
  createCanvas( 1920, 1080);
   background(161, 220, 255);
}
//sun animation
let x = 20;
let x1 = 1900;
    function draw() {
       x=x+5;
       background(161, 220, 255);
      fill(255, 219, 74);
      strokeWeight(0);
       ellipse( x, 60, 65, 65);
      if( x < 20);
      if( x > 1900){
        x=1900
      };
  //is there a way to prevent it from leaving a trail?
  //how might this work with oppacity and animate these with a a sort of multiply effect?
  //drawing methods 1:stroke weight 2:shape(ellipse) 3:fill
  //1 varible used

  //cloud animation. 3 circles in a cluster
 x1=x1-5;
   fill(255, 255, 242);
    strokeWeight(0);
    ellipse( x1+130, 120, 70, 70 ); //1st cloud part
    ellipse( x1+50, 120, 60, 60 ); //2nd cloud part
    ellipse( x1+90, 115, 90, 90 ); //3rd cloud part
    if( x1 < 1900);
//houseSquare
    fill(255, 137, 82);
    strokeWeight(10);
     rect( 200, 480, 600, 600 );
 
//houseRoof
fill(48, 12, 0);
   beginShape();
   vertex(100,480);
   vertex(900,480);
   vertex(500,180);
 endShape(CLOSE);
 
// rect( 400, 780, 200, 400);
}
  console.log(x < 20);
  //Check and see if the console log has to follow ever chunk of code or if it should go to the end.
 
  console.log(x1 > 1900);