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

/* 2) Tip calculator

 Make a page with one input and one button (Seeing a trend?). When the button is clicked 
 (assuming the value typed into the input is numerical), calculate both the tip and the full value of the bill to be paid.
  Output both to the console, formatted as such:

 "Tip: $X. Total: $X" */

//Plans
//html//
    //<input type= number id="numField">
    //<button  onclick="tipCalc()">Calculate Tip</button>

//js//
    let bill = document.getElementById("numField");
    
    function tipCalc(){
        let billSum = Number(bill.value);  //limit bill to # values.
        for(let i=0; i < billSum; i++){
           let tip= billSum* 0.15; //tip percent 15%
           let total = billSum+tip; //add 15% of bill to bill and print out the sum
            console.log("tip:$"+tip);
            console.log("total:$"+total);
            }}

