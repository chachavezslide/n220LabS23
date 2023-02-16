//Do 3 of the below:

//Do all in JavaScript for your styling (to simplify interactions).



//---------------------------------------3: Over and Out------------------------------------------//

//Write the markup and JavaScript to place a square div on the page (100px x 100px), 
//with a blue background. Using onmouseover and onmouseout (instead of "onclick"), 
//change the div's color to black when the mouse is over the div, and back to blue when the mouse leaves.
let squareChanger = document.getElementById("square");

squareChanger.style.backgroundColor = "blue";
squareChanger.style.width = 100 + "px";
squareChanger.style.height = 100 + "px";

function overColor(){
    squareChanger.style.backgroundColor ="blue"; // starts as blue already, this resets it
}
function outColor(){
    squareChanger.style.backgroundColor ="black"; // changes to black.
}
//plan//
// create div
// place the div on the screen

//div default color set to blue

//onmouseover, style the div to be black
//onmouseout, set style of div back the blue

