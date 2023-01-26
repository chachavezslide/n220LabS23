//Please submit a word document with: a link to an HTML page that links to your 
//three completed assignments and a link to your Github.com repo.
//Your git repo needs to have a check-in by 
//Monday that only includes the algorithm in comments. 

//1- Counter
//Create an application that outputs a number to the console 
//every draw call of P5. This number should start at zero, and increase by one every frame.


function setup() {
    createCanvas(400, 800);
   print("The Draw Counter!");
}
function draw() {
   print(frameCount);
   background (255, 255, 255);
   fill(0,0,0);
   ellipse (mouseX, mouseY, 30);
}
console.log