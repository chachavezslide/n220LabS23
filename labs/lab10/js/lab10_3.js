/*
Flash Cards

An application with 3 buttons that ask questions. 
For instance, they might ask "What is the capital of Indiana?".
 Each button should have a data-answer attribute that lists the answer.
When a button is clicked, display the answer to the button's question in a div.
 Use only one function, and that function must make use of the button's data-attribute.
*/

//plans

//set up 3 buttons

//What is Indiana's capitol
//Indianapolis

//what is illinois's captial
//Springfield

//what is Michigan's captial?
//Lansing
// let newElement = document.createElement("button"); 

let cardHolder = document.getElementById("container"); //div container

let capitals = ["Indianapolis","Springfield","Lansing"]; //capitals: answers

let states = ["Indiana", "Illinois", "Michigan"]; //states: questions

let result = document.getElementById("result")

for(let i =0; i<3; i++){ // runs the array to produce buttons for questions
    let newCard = document.createElement("button");
    newCard.innerHTML= states[i];
    console.log(states[i])
    container.appendChild(newCard)
    newCard.dataset.cardAns = capitals[i]; //ties the capital to the respective state
    newCard.addEventListener("click", respondCapital) //event listener
}

//function

function respondCapital(event){
    
        //make the i value of states mathc the i value of capitals. 
       // i=0
       console.log (event.target.dataset.cardAns)
        let cardAns = document.createElement("div"); // print out i value ever count.
        let response = event.target.dataset.cardAns
        result.innerHTML = response;
        //console.log(capitals[i])
        //container.appendChild(cardAns)
    
    
    
}