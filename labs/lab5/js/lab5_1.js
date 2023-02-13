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


//let height = 100;
//let width = 100;

function setup(){
//createCanvas (1000, 1000);
}
function draw(){
    //onClick 
    //multiply height by 1.1
    //multiply width by 1.1
    //return the code
}
// html //


//<style> 
//size{
//set the margins 100px out?
//}
//</style>
//<div></div> 


//-------------------------------------------2: McDiv'ns...........................................//

//Put a div on the page. When the div is clicked, append the text "mc" to whatever is in its innerHTML.
//After 3 clicks, the div will show "divdivdiv"

// html //
//<style> set the style for divs
//set it to onclick
// if onclick is <= 3 then mc
//if mc > 3 then "divdivdiv"
// <div></div>

//---------------------------------------3: Over and Out------------------------------------------//

//Write the markup and JavaScript to place a square div on the page (100px x 100px), 
//with a blue background. Using onmouseover and onmouseout (instead of "onclick"), 
//change the div's color to black when the mouse is over the div, and back to blue when the mouse leaves.


//plan//
// create div
// place the div on the screen

//div default color set to blue

//onmouseover, style the div to be black
//onmouseout, set style of div back the blue

//------------------------------------4: Personal Composition-------------------------------////

//Create a composition that, at minimum:
//1. Changes the css property of an asset on a mouse interaction (mouse over, mouse out, click)
//2. Modifies and changes the inner html of one element
//3. Accesses and modifies a variable outside of a local, function scope

 //is this even posssible or would this conflict with the other styleSheet.css?