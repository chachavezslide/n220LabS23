/*
Color Mixer

This is an application that will start a div at a black color, 
and as a user presses buttons associated with RGB, the div will change to new colors. 
The button presses should affect additively - that is. If a div is currently blue, pressing +red buttons will change the div to a purple color.

9 buttons (associated with red green and blue). There should be a +1, +5, and +10 button for each color.
1 div that will change colors to the rgb color calculated

1 div that shows the current calculated rgb color

You must use attributes on the buttons for the values to change the colors by.
*/

/* 
<button id="red1"> Red +1 </button> <button id="blue1"> Blue +1 </button> <button id="green1"> Green +1 </button>
    </br>
<button id="red5"> Red +5 </button> <button id="blue5"> Blue +5 </button> <button id="green5"> Green +5 </button>
    </br>
<button id="red10"> Red +10 </button> <button id="blue10"> Blue +10 </button> <button id="green10"> Green +10 </button> 
*/

//plans

//set buttons up, 9 of them
// 3 for low med and hi for each color

//onbuttonpress add values to div
let container = document.getElementById("container");
    container.style.width = 500 + "px"

let colorDiv = document.getElementById("colorDisplay");
    colorDiv.style.backgroundColor="rgb(0,0,0)";
    colorDiv.style.width = 500 + "px";
    colorDiv.style.height = 100 + "px";

let rVal = 0;
let gVal = 0;
let bVal = 0;

let red1 =document.getElementById("red1");
red1.addEventListener("click",addRed)

let red5 =document.getElementById("red5");

let red10 =document.getElementById("red10");

let green1 =document.getElementById("green1");

let green5 =document.getElementById("green5");

let green10 =document.getElementById("green10");

let blue1 =document.getElementById("blue1");

let blue5 =document.getElementById("blue5");

let blue10 =document.getElementById("blue10");

function addRed(event){
    console.log(Number(event.target.getAttribute("data-response")))
    
}