let r = 1;
function setup(){
    createCanvas( 1080, 1920) ;
}
function draw(){

    fill(150, 40, 20);
    circle(mouseX, mouseY, r);
   
    //"r" is the radius, the circle cannot be larger than 50, so r must be less than or equal to 25. 
    
    if(mouseIsPressed) {
        //+1 radius 
        r++;  
    }
    if(r > 50){
        r=50;
    }

    console.log(r);
}