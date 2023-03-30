/*
//Instructions

Is Divisible By Seven
Create an application that with an input and a button. When the user clicks on the button, 
update a div on the page to tell the user if what the user typed into the input is divisible by 7 or not.
Use a separate function from the onclick function to discern if it is divisible. 
This function should return either true if it is divisible  or false if it is not.

*/

// Html instruction 
/*
<button  onclick="">Divisible by 7?</button>
    <input type= number id="numField"></input>
    <div id="output"></div>
*/
//js
/*
i=user input
function runs on click 
if ( i % 7 == 0){// true
x="Divisible by 7"} else {//false
x="Not divisible by 7"}
*/

let userNumber = document.getElementById("numField")

function divideBySeven(i){

  let result = i % 7; //divides by seven, produces remainder, 
  
  if(result == 0){ // if remainder is 0, then it is divisible by 7
     return true;
    } 

  return false;

  
}


 function isDivisible(){
    let i = Number(userNumber.value) //limit only to numbers 
   
  output.innerHTML = divideBySeven(i) //when function runs at the call of the button click, it will run divideBySeven(i) every time the button is clicked 
  
    console.log(divideBySeven(i))

 }
