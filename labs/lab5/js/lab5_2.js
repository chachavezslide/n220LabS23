//Do 3 of the below:

//Do all in JavaScript for your styling (to simplify interactions).


//the magic stuff

//let squareDiv = document.getElementById("square");

//-------------------------------------------2: McDiv'ns...........................................//

//Put a div on the page. When the div is clicked, append the text "mc" to whatever is in its innerHTML.
//After 3 clicks, the div will show "divdivdiv"
let mcDivns = document.getElementById("mcDiv");

mcDivns.style.backgroundColor = "red" //object properties
mcDivns.style.width = 200 + "px"
mcDivns.style.height = 200 + "px"

function mcmcmc(){
    mcDivns.innerHTML += "mc" //write mc on the div
    console.log();

}


document.body.appendChild(mcDivns);

console.log(mcDivns);
// html //
//<style> set the style for divs
//set it to onclick
// if onclick is <= 3 then mc
//if mc > 3 then "divdivdiv"
// <div></div>

