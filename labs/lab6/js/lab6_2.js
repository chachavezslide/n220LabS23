/*



2 - Beep Bop

Write a loop that runs 25 times and writes the iterand 
(current iteration of the loop) out onto the page inside of a div element.

However,

When the iterand is divisible by 3, write the word "beep" instead
When the iterand is divisible by 5, write the word "bop" instead
When the iterand is divisible by 3 AND 5, write "beepbop" instead
*/ 
//------planing----// 

//html: write a div lol, and link it to the script too.

//js

let beeper = document.getElementById("beeps");

beeper.style.width = 200 +"px";
beeper.style.height = 600 +"px";  //div details 
beeper.style.backgroundColor = "red";

let i = 0; // iterands 

while ( i < 25){
    i++; //add one each count. 
    console.log(i);
    if ( i % 3 == 0){  //if i divided by 3, is it equal to 0? 
        //(this operator goes by taking the highest diviseable number and subtracts it from the first number to give the remainder)
        console.log(i+"beep"); //tester
        beeper.innerHTML += "beep" + "<br />";
     }
    if ( i % 5 == 0){ //if i divided by 5, is it equal to 0? 
        console.log(i+"boop")
        beeper.innerHTML += "boop"+ "<br />";
    }
    if ( i % 5 == 0 && i % 3 ==0){ //if i divided by 3 and 5, is it equal to 0? 
        console.log(i+"beepboop")
        beeper.innerHTML += "beepboop"+ "<br />";
    }
    
}
 
console.log("hammedburger");

//create an if function that will write beep to the document when i is divisible by 3
//create an if function that will write beep to the document when i is divisible by 5
//create an if function that will write beep to the document when i is divisible by 3 and 5

//maybe create an arry of all numbers we know are divisible according to the parameters? I bet there is a function to use but idk



