/*
Make Divs

Given the array

let objects = [

 { color: "#FF0000", height: 100, width: 300 },

 { color: "#FFFF00", height: 200, width: 200 },

 { color: "#ff0000", height: 300, width: 100 },

];

Write a loop that creates three divs based on the data in the array. 
You should only have one document.createElement in your code. */

//plan

/*
use document.createElement once

if i has all categoies, then create.

connect each color hiehgt and width into a 
function and run a while function that does document.createElement until all items in the arrya have been made. 

*/



let newDiv = document.getElementById("divSq")

let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];


function divProcess(){
    let newDiv = document.createElement("div");
    for( let i= 0; i < objects.length; i++){
       
    newDiv.style.backgroundColor = objects[i].color;
    console.log(objects[i].color)
    newDiv.style.width= objects[i].width;
    console.log(objects[i].width)
    newDiv.style.height=objects[i].height;
    console.log(objects[i].height)
    
    newDiv.innerHTML =objects[i].width;
    newDiv.innerHTML =objects[i].height;
    newDiv.innerHTML =objects[i].color;
    }   
    tester.appendChild(newDiv)
    console.log(newDiv)
} //return newDiv;

function divMaker(){
div.innerHTML=divProcess()    
}


/*ooooookay, i'm going to be honest here. 
I have been swamped with capstone and haven't really felt too well the past couple of days( sinus issues, most likely), appologies if this is late lol */

/* mcDivns.style.backgroundColor = "red" //object properties
mcDivns.style.width = 200 + "px"
mcDivns.style.height = 200 + "px"
*/