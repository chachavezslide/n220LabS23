/*

Purpose
The goal of this exercise is to study how to use arrays and loops to place data and elements on a web page. During this exercise, you be will using looping structures and arrays to either manipulate data or display data in an array. Some of these exercises may be stepping stones that are focused on understanding how loops work rather than producing output. 

Knowledge
Throughout this process it is expected that you will run into errors, and considering and fixing those errors will help you to learn the limits what these tools can do. I do expect you to run into road blocks - but it is by that process that you gain the knowledge. 

Skills
You will practice the following things;

Adding data to an array
Summing up numbers in an array
Writing a loop that loops as many times as there are elements in an array
Getting data out of an array in a loop
Using data from an array to create or modify elements on a page
Tasks
Complete the four assignments below.

You will need to utilize time management for this - please begin these assignments before lab.

1- Loop, but big
Write a loop that displays in a div the numbers 1000, 2000, 3000, 4000, 5000. 
There should only be one line of code inside of your loop.

//-------------planning--------------//
/*html
<div id="counter"></div>

*/
/* js

let counter5k = document.getElementById("counter");

counter5.style.width = 200 +"px"; 
counter5.style.height = 200 +"px";  // div size

const counterArray = [1000, 2000, 3000, 4000, 5000]; 
// could this be revised to [1,2,3,4,5]; and every time a value is called from the array, multiply by 1000?

funciton counterWrite(){ // how to get this to trigger imediately in the html

    for(let i= 0, i <counterArray.length) {//use a for function to write out array numbers 0,1,2,3,4 
}
document.body.appendChild(counter5k);

*/

let counter5k = document.getElementById("counter");

counter5k.style.width = 200 +"px"; 
counter5k.style.height = 200 +"px";  // div size
counter5k.style.backgroundColor = "#fffff0" // div color 

//const counterArray = [1000, 2000, 3000, 4000, 5000]; 


let i = 0; //iterands 

while(i < 5){
    //console.log(i);
    i++; //add i each count
    counter5k.innerHTML += i*1000 + "<br />" //this is to make it all thousands, hence the "k"
    console.log(i * 1000); //tester 
}
  
//console.log();
//document.body.appendChild(counter5k);