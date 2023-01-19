function setup () {
  createCanvas( 1920, 1080);
  background(161, 220, 255);
}
//sun animation
let x = 20;
let x1 = 1900;
function draw() {
  x=x+5;
  fill(255, 219, 74);
  strokeWeight(0);
    ellipse( x, 60, 60, 60);
  if( x < 20);
  //is there a way to prevent it from leaving a trail?
  //how might this work with oppacity and animate these with a a sort of multiply effect?
  //drawing methods 1:stroke weight 2:shape(ellipse) 3:fill
  //1 varible used
  x1=x1-5;
    fill(255, 255, 242);
    strokeWeight(0);
      ellipse( x1, 150, 30, 30 );
  
       ellipse( x1+50, 125, 50, 50 );
       ellipse( x1+70, 95, 40, 45 ); //3rd cloud part
  if( x1 < 1900);

 fill(255, 137, 82);
 strokeWeight(10);
 rect( 200, 480, 600, 600 );
 
 fill(48, 12, 0);
 beginShape();
  vertex(100,480);
  vertex(900,480);
  vertex(500,180);
  endShape(CLOSE);
}
  console.log(x < 20);
  //Check and see if the console log has to follow ever chunk of code or if it should go to the end.
 
  console.log(x1 > 1900);