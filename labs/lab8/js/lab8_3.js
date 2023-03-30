/*
//Instructions

Cleanup

Make a function that takes a string, and removes every instance of "#" from the string,
 and returns the "cleaned up" version without the hashtags/octothorpes. 

Write a web page to test the function - one button and input, and one div.
 When the button is pressed, take the input, use the function to remove the hashtags, and show the result string on the page.

*/

// Html instruction 
/*
<button  onclick="">cleaner</button>
    
    <div id="stringCleaned">"## Sorry #I#don#t #under##stand y#ou"</div>
*/

/*function isVowel(char){
    char = char.toLocaleLowerCase()
    if(char=="a"|| char=="e"||char=="i"|| char=="o"||char=="u"){
        return true;
    
    }
    return false;
} */

//js
/*
function cleanUp()
when button is clicked ,remove #'s from the string. 
This may involve an if function to check when there are no more #'s. If false, then function does not run.
*/
//## Sorry #I#don#t #under##stand y#ou

let userText = document.getElementById("textField").value
//let testString = "## Sorry #I#don#t #under##stand y#ou"

function octoFinder(char){
    return char.includes("#"); // checks the given string to see if there are octothorpes 

}


function octoRemover(){
    
    let userText = document.getElementById("textField").value  //pulls the content from the user input field 
    result = userText;
while( octoFinder(result) == true) {result= result.replace("#", "")} //calls the finder function, as long as there are "#" it will remove them
console.log(result)  //YESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS!!!!!!
stringCleaned.innerHTML=result;
//console.log(result)
} 

//stringCleaned.innerHTML=userText;