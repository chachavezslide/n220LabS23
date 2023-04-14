/*
Create an application with three grey, square divs, in a row. 
They should be 200px by 200px, and all floated left. Give them a margin of 5px.

Using only one event handler, write event listeners to respond to a click on each element.
 Each element should change to a different color: one red, one green, and one blue.
  Use a data attribute on the elements to store the color to be changed to.

The result, after clicking on the first and third, should look something like this:
*/

//plans 

//html

//create 3 divs 
//classes: div1, div2, div3
// set up classes to have even length sides 

//java use an even listener onClick.
//when clicked change div 1 to #ff0000
//div 2 to #00ff00
//div 3 to #0000ff

// change each class atttribute when div clicked.

//lets go
let container = document.getElementById("container")
container.style.width = 800 +"px"


let divOne = document.getElementById("div1"); 
  divOne.addEventListener("click",changeColor);

  divOne.style.backgroundColor="gray"
  divOne.style.width= 200 + "px"
  divOne.style.height= 200 + "px"
 
 let divTwo = document.getElementById("div2"); 
  divTwo.addEventListener("click",changeColor);
  
  divTwo.style.backgroundColor="gray"
  divTwo.style.width= 200 + "px"
  divTwo.style.height= 200 + "px"

 let divThree = document.getElementById("div3"); 
  divThree.addEventListener("click",changeColor);

  divThree.style.backgroundColor="gray"
  divThree.style.width= 200 + "px"
  divThree.style.height= 200 + "px"



 function changeColor(event){
  console.log("Test")
let response =event.target.getAttribute("data-response")

  event.target.style.backgroundColor = response;
 }
 //event.target.style.backgroundColor= response