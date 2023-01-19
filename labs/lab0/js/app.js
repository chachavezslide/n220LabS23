
function setup() {
        createCanvas(1200,768);
    
        background (135, 64, 207 );
        

        fill( 101, 40, 30 );
        rect( 40, 50, 100, 20);
        rect( 40, 70, 100, 20);
        rect( 40, 90, 100, 20);
        ellipse( 40, 400, 120, 300);
}
function draw() {
    stroke(200, 0, 0, 10);
    line(mouseX, mouseY, 30, 50);
}