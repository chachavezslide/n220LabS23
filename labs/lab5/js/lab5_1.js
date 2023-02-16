//Do 3 of the below:

//Do all in JavaScript for your styling (to simplify interactions).

//--------------------------------1: Peak Pixels-------------------------------------//

//Write the markup and JS to place a square div on the page. 100px by 100px, green background.
///Make it so that when the div its clicked, it increases its size by 10% every time.

//Hints:

//Make a variable to store the height and witdh of the object
//to set the height and width, set to varName + "px"
//10% is .1 bigger,or 1.1 * the original size

//code plan 1//

//--js--//
var width = 100;
var height = 100;


let squareDiv = document.getElementById("square");

//squareDiv.innerHTML = "squareHere?";

squareDiv.style.backgroundColor = "green"; //color
squareDiv.style.width = width + "px"; //width and units
squareDiv.style.height= height + "px"; //height and units

function growSquare(){
    width = width *1.1; //increase widht
    height = height *1.1; // increase height
    
    squareDiv.style.width = width +"px"; //store changes
    squareDiv.style.height = height +"px"; //store changes 
    //insert return or way that it repeats every time clicked
    
   console.log(squareDiv); //log rolling
}

document.body.appendChild(squareDiv);
//let height = 100;
//let width = 100;

//<style> 
//size{
//set the margins 100px out?
//}
//</style>
//<div></div> 
