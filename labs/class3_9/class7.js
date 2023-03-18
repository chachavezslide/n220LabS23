/*
- in small groups
- Review the notes on input

Try to create an application with an input and a button. 
When the button is clicked, log out to the console the text in the input field twice in a row.

For instance, typing "dog" in the input field will result in "dogdog" being logged to the console when the button is clicked.

If you finish this - try to make a second input where a number placed in the second input controls how many times the word is appended.
 ("dog" and "3" would result in "dogdogdog")

After 20 minutes, reflect upon the experience. What was difficult about using inputs - how might you address these difficulties?
*/

// 
/*
let text = document.getElementById("txtField");
let result = document.getElementById("output");
function multiTxt(){
let printText = text.value;
    result.innerHTML += printText;

    
console.log(text.value);
console.log(text.value);
}
*/

let text = document.getElementById("txtField");
let result = document.getElementById("output");
function multiTxt(){
let printText = Number(text.value);


for(let i= 0; i < printText; i++){
   
    console.log("dog");
}
//result.innerHTML += printText;

    
console.log(text.value);
}