/*

3 - Runner Up

Create an array with 3 "best times" (numbers). Write the array so the times in order, from lowest to highest.

Then, write the line of code that displays the runner-up times (second and third place) in two different divs.

 //------------------plan-----------------//

 3 best times? like my favorite times of day? 

 //create an array of ["12:00", "15:00", "17:00"] These values are 0,1,2

--------------------------------------------------------------------------------------------------------------
*/
let timeArr = [1200 , 1500 , 1700]; // the array, think military time

//--------------------first div------//

let bestTime = document.getElementById("first"); 

bestTime.style.backgroundColor="yellow";

console.log(timeArr[0] +"first!");

bestTime.innerHTML =timeArr[0] +"First!"

//------------------ second div---------//

let secondPlace = document.getElementById("second");

secondPlace.style.backgroundColor="grey";

console.log(timeArr[1]+ "second");

secondPlaceinnerHTML +=timeArr[1] +"second" +"<br />"

// [-----------------third div------------//

let thirdPlace = document.getElementById("third");

thirdPlace.style.backgroundColor="orange";


console.log(timeArr[2] + "third");

thirdPlace.innerHTML +=timeArr[2] +"third :("

//create an array of ["12:00", "15:00", "17:00"] These values are 0,1,2 




