/*
Purpose

In this assignment, you will be practicing how to get input from the user and use that input for different computation tasks.
 This will require you to get references to inputs on the page, add click event listeners to buttons on the page,
  and get the value of inputs after the user has typed into those inputs. 
  From this you will develop the skills to make things like login systems, update fields, 
  and a myriad of other aspects that require capturing textual or numeric data from the user.

It is likely that you will encounter bugs in your code as you work, or struggle with producing the application. 
This is normal and expected - debugging and re-thinking are part of process. 
Remember to start early, focus on your algorithm, and think about what data you need, where that data exists,
 and how that data changes over time.

It is expected that you do this work without referencing material beyond those employed in the class.
 (i.e., not using stack overflow or other resources to find exact solutions to the problems posed).

In this assignment you will be asked to create an algorithm (or plan)
 for your code, which will be shown in your comments in the code itself. 
 You may also wind up doing some of your thinking on paper before turning it into a plan you can create code for. 
Additionally, you will be required to write a brief reflection on your experience. 
This is not busywork! This is to help you identify where you are doing well, and where you may need to further practice 
working on your programming.

Complete three of the below:

*/

/*
4) Distance Calculator


Create a page with four inputs, labeled x1, y1, x2, and Y2. Add one button labeled "calculate distance".
When the button is pressed, calculate the distance using the equation d = Math.sqrt( xDiff*xDiff + yDiff*yDiff); 
(xDiff and yDiff are the differences between the x points and y points, respectively)

The distance calculation MUST take place in a function that returns the value of the distance.
*/

//Plans
//html//
    //4 inputs: x1, y1, x2, y2
    //<button> calculate distance</button>

//js//
//button function 
//d = Math.sqrt( xDiff*xDiff + yDiff*yDiff) 
    // xDiff= x1 value- x2 value
    // yDiff= y1 value - y2 value

    //return d to print out the value in the function?

let x1Val = document.getElementById("x1");//position 1 x
let y1Val = document.getElementById("y1");//position 1 y
let x2Val = document.getElementById("x2");//position 2 x
let y2Val = document.getElementById("y2");//position 2 y
let result = document.getElementById("output")


function distCalc(distance){
    let xDiff = Number(x1Val.value) - Number(x2Val.value); 
    let yDiff = Number(y1Val.value) - Number(y2Val.value); 
    d = Math.sqrt( xDiff*xDiff + yDiff*yDiff);  //pythagorian triangle a^2 +b^2 = c^2 also eliminates any negative numbers 
    console.log(Math.sqrt(xDiff*xDiff)); 
    console.log(Math.sqrt(yDiff*yDiff));
    //console.log(yDiff);
    console.log(d);
    output.innerHTML= d; 
    return distance  //is this right?
    
    
}
/*
    let billSum = Number(bill.value); 
    let user = document.getElementById("userField");
let pass = document.getElementById("passField");
let outputCheck =document.getElementById("passField");

//output.innerHTML ="Success"
function loginCheck(){

let usernameInput = user.value;
let passwordInput = pass.value;

if((usernameInput=="Username") && (passwordInput=="Password")){
    output.innerHTML ="Success";
    console.log("Success");
} else{
    output.innerHTML ="Incorrect Information";
   console.log("Incorrect Information");
}
   
} */