/* 
Its just average

Create an application that:

Takes in a list of comma-separated numbers from the user
Splits that list into an array of numbers
Converts the string version of the numbers into number versions
Loops through the array and sums up the values
Calculates the average of the array
Displays to the user
The average
The sum
Removes the text from the input so the user can type in new numbers */

//plan

/*
html

Text input 

Button???? to run the function??

Div for results 

maybe include instructions to use commas??

js:
use a .split(",") to separate each number into its own string in an array.
connect the array to a Number() function

run a fucntion that adds the values within the array and divide by array.length.

*/

//let userNumber = document.getElementById("userNumbers")


//the actual meat and potatoes
function spliter(){
    let userNumber = document.getElementById("userNumbers").value
let numArray = userNumber.split(","); //generates the array
let i = 0;
console.log(numArray)
let sum = 0;

while (i < numArray.length){

let rawNum = Number(numArray[i]); //converts strings to numbers
i++;
total=sum +=rawNum; //iterates the array
console.log(sum);
//console.log(rawNum);

}

let average = sum / numArray.length;

console.log(average)

return average;
}

function averageCalc(){
    
    res.innerHTML=spliter();// runs function and prints rhe average
}