/*
//Instructions

Make Random

Create a function that generates and returns a random whole number between 0 and 10. 
Write a web page to test it by having a button that, when clicked runs a function that:
 - Uses that function to generate a random number.
  - Displays that number on the screen. Your final application should have two functions
   - one to make the random number, and one to handle the click.
*/

// Html instruction 
/*
<button  onclick="">random roll</button>
    
    <div id="output"> <!-- insert function here --></div>

*/

//js
/*
//set a function to run a math.Random() that runs 0<= x <=10
//return the result

set another function, maybe nest it in the other. function click(){
   function mth.random
   0<=x<=10
   return
}
*/
//let 

/* function divideBySeven(i){
 // 
  let result = i % 7;
  
  if(result == 0){
     return true;
    } 

  return false;

 // if(result==0){console.log(true), output.innerHTML = "True"} else {console.log(false), output.innerHTML = "False"};
  
}
//console.log(divideBySeven(14)); 

 function isDivisible(){
    let i = Number(userNumber.value)
   
  output.innerHTML = divideBySeven(i)
  
    console.log(divideBySeven(i))

 }*/
 
function randomRoll(){ 
let roll = Math.floor(Math.random()*10); //rounds the decimal after multiplying by ten for a whole number 

console.log(roll)
return roll; //run it back turbo

}


function randomizer(){

   output.innerHTML = randomRoll() // display random number 
}