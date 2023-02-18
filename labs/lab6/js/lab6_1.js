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


-------------------------------------------------------------------------

2 - Beep Bop

Write a loop that runs 25 times and writes the iterand 
(current iteration of the loop) out onto the page inside of a div element.

However,

When the iterand is divisible by 3, write the word "beep" instead
When the iterand is divisible by 5, write the word "bop" instead
When the iterand is divisible by 3 AND 5, write "beepbop" instead

//------planing----//
/* 
//html: write a div lol, and link it to the script too.

//js

let beeper = document.getElementById("beep");

let i = 0;
while ( i < 25){
    i++;
    console.log(i);
}

//create an if function that will write beep to the document when i is divisible by 3
//create an if function that will write beep to the document when i is divisible by 5
//create an if function that will write beep to the document when i is divisible by 3 and 5

//maybe create an arry of all numbers we know are divisible according to the parameters? I bet there is a function to use but idk
*/

/*

----------------------------------------------------------------------------------------------------------------------

3 - Runner Up

Create an array with 3 "best times" (numbers). Write the array so the times in order, from lowest to highest.

Then, write the line of code that displays the runner-up times (second and third place) in two different divs.

 //------------------plan-----------------//

 3 best times? like my favorite times of day? 

 //create an array of ["12:00", "15:00", "17:00"] These values are 0,1,2

--------------------------------------------------------------------------------------------------------------

4 - Favorray

Create a string array. List at least five of your favorite things in that array.

Then, write a loop that writes to a div element each of them, with the string ", is one of my favorite things." after the thing.
 For instance, one line in the div might say, "Pizza, is one of my favorite things."

//create an array of 5 favorite things ["Calvin Fletchers","Amberson","Parlor","Leviathan","Tinker"] 

// maybe edit the string to say "places" rather than things, given the context??

//while i<5, write iterand string
//"iterand string"+ "is one of my favorite places"



*/

