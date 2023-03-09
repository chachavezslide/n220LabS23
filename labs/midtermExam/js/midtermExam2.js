/* instructions 

Using this button: <button>Mystery</button>: 
Write a program that, after the button is clicked five times, 
changes the button’s text to “revealed”. 
You will need to edit the button’s markup for this to work.

*/

/* planning

the button should be clicked 5 times. code it so each click adds 1 to a varible. when that varible reaches 5 or is greater than it, 
then change the text (appendchild? innerHTML?) to "revealed" */

let mysteryButton = document.getElementById("mystery");

let i = 0; //0 clicks, the start value 

function mysteryRevealed(){
i++ // add one per click
console.log(i + " clicks"); //click count
if(i>=5){
    mysteryButton.innerHTML = "REVEALED!!!!!!"  //Reveal the mystery
    if(i>=60){
        mysteryButton.innerHTML = "Wait, really? You're still here? lol"  //lol
    }
}

}

console.log(mysteryButton)