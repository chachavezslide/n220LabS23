/*

Your program must include at least 1/2 of the following options:
 mouse interaction, 
2 global variables access and modified in response to user input, 
an array that is accessed or modified in response to user interaction, 
a if/else if/else block, 
a loop,
 an object that is modified during application runtime,
  manipulating the document object.

*/

/* 
Concentration

Create a version of the 'classic' game of memory (aka concentration).
 There should be a 4 x 4 grid of cards laid out face-down in front of the user.
  When clicked, reveal the face of a card. When a second card is tapped, reveal the face of that card as well. 
  If the two cards match, remove them from the game. 
  If they don’t, return them to face-down and allow the user to choose two more.

Requirements

A 4x4 grid of facedown cards

Reveal the value of a facedown card on click

If two revealed cards match, remove them

If two revealed cards do not match, return them to face down

A ‘replay game’ option when the game is over

Use setTimeout to keep both face up cards visible for two seconds before hiding / removing them
*/

//plans 
// create an array with number values, write them in pairs 
// Create a div container with a limited size 
// Format the  each div created within the container to be rectangles that fit 4 in a row.
  //i.e. container is 1600px wide, however tall, each card is 380 px, 10 px margin on each side, give or take  
//
//Set each div to onclick
  //when clicked, animate(?) and change to a lighter shade of the color.
  //save the selected div data-hidden value to on last click
  // if next div value = last clicked save value, then turn them to a darker color, change the numbers to green.
    // else, revert the card to the previous styl and hide the value.
//Here's the trick, how to do fully reset back to a previous state?
//add a reset button.
  //should this be set to re shuffle to another set of random numbers?

//---------------------------------container stuff---------------------------------------//

  let container = document.getElementById("container")
  
  container.style.width = 400 + "px"
  container.style.height = 360 + "px"
  container.style.backgroundColor = "gray"
  container.style.position = "center"
  container.style.margin = '0 auto'
//---------------------------------Card Data --------------------------------------------//
  let cardArr = [11,23,12,4,9,11,9,20,20,10,4,12,32,10,32,23] ;
  //we will need to create an array that will be filled with 8 random numbers 
  // duplicate each random number
  // randomize the array 

//------------Card memory
let prevCard=""
//let currCard= document.querySelector("div") //does this even work??? idk what does it do? is this just arbitrary lmao?

  
  for(let i =0; i<cardArr.length; i++){ // creates an array of divs to use
    let newCard = document.createElement("div");
    //
    newCard.addEventListener("click",cardFlip)
    newCard.style.width = 90 +"px"
    newCard.style.height = 80+"px"
    newCard.style.backgroundColor = "#c4f6ff"
    newCard.style.float = "left"
    newCard.style.margin =5 +"px"
    newCard.dataset.index = i;

    //console.log(cardArr[i])
    container.appendChild(newCard) //add new button.
    //return newCard
}

// card flipping

function cardFlip(event){
  let index = Number(event.target.dataset.index)
 // event.target.innerHTML=cardArr[index]
  //event.target.style.backgroundColor="#6fe392"

   // console.log(prevCard, event.target.dataset.index);

   // console.log(cardArr[prevCard], cardArr[event.target.dataset.index])

   // let testA =cardArr[prevCard] 
   // let testB =cardArr[event.target.dataset.index]
  
if(prevCard ==""){
  //prevCard = event.target;
  prevCard = event.target.dataset.index;
  console.log(prevCard)
  //onsole.log("clear card")

  event.target.innerHTML=cardArr[index]
  event.target.style.backgroundColor="#6fe392"
  
} else {
  if( cardArr[prevCard] != cardArr[event.target.dataset.index]){
    setTimeout(function() {event.target.style.backgroundColor= "#c4f6ff"},2000)
    setTimeout(function() {event.target.innerHTML=""},2000)
    console.log("clear")
  } else{
  if(cardArr[prevCard] == cardArr[event.target.dataset.index]){
   console.log("match")
    event.target.innerHTML=cardArr[index]
    event.target.style.backgroundColor="#6fe392"
  }}
  

  prevCard="";

  
}

  /*
    if( testA == testB){

    console.log()
    
    
   
    //prevCard.style.backgroundColor="blue"
    console.log("match")
  

  } else{

     console.log("no match")

     setTimeout(function() {event.target.style.backgroundColor= "#c4f6ff"},2000)
     setTimeout(function() {event.target.innerHTML=" "},2000)

    }

    prevCard= event.target.dataset.index; //place at bottom??
  */
    //prevCard= event.target.dataset.index; 
}; 


  
 //---------------reset button-----------------------//

 let resetButton = document.getElementById("reset")
    resetButton.style.width = 100+ "px" 
    resetButton.style.position = "absolute"
    resetButton.style.left = "47%"
    //resetButton.style.margin='0 auto'

function cardReset(){
  console.log("test")
  window.location.reload();
}
