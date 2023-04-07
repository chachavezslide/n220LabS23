/* Bad word catcher with loops

 

For the purposes of this exercise, bad words are: clear, water, tires.

Create an application that:

Takes input from a user using a simple text input field.
Splits the string on spaces
Loops through  the array looking for bad words in the array
Adds 1 to a tally count when a bad word is found
Outputs to the document
If any bad words were found (found / not found)
How many bad words, in total, were found
Clears out the text field so the user can input a new string
 

For example, if the user input "clear water is clear", there are 3 bad words in the string. */

//plan

/*
//html
input field
button
div for the cuss count
div for found.

//js

split(" ") to split the string into an array.

scan the array for for bad words by setting a varriable for each.



for(let i =0; i<arrayName.length; i==){

if(arrayName[i]==findKeyword){console.log("found keyword")}  should be used to check for the words.
'everytime it is true, add one. if count is > 0 then print out "found"

*/

//let stringInput= document.getElementById("userString")

function spliter() {
    let userText = document.getElementById("userString").value;
    let textArray = userText.split(" ");
    console.log(textArray)


    let tally = 0

    for(let i=0; i<textArray.length; i++){
        if(textArray[i]== "clear" || textArray[i]=="water" ||  textArray[i]=="tire" ){
        tally ++
            console.log(tally);
        }
    }return tally;


}



function cussCatcher(){
    
    res.innerHTML=spliter() +"Words found";
}


//graveyard

/*while(i < textArray.length) { 
    let wordSelected = textArray[i]
    i++;
    console.log(wordSelected)

//if(i>textArray.length){break;}
}

console.log(element)*/


   // let findClear = "clear";
    //let findWater = "water";
    //let findTires = "tires";
//function findClear(){} while(let i =0; i<textArray.length; i++) {if(i>textArray.length){break;}}

//bad words ["clear", "water", "tires"]

//let badWords = ["clear","water","tires"];