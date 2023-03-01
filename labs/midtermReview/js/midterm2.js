/*
//--------------Rock Paper Scissors (Guard)--------------//

Make a game of rock-paper-scissors using DIVs as the buttons to select one of four options: rock, paper, scissors, and guard.

Add a space for a score display on the screen. Start the score at zero. (this will be tied to an application/global variable)

When any of the divs are clicked, run the logic for this game -

Generate a random move for the computer (rock/paper/scissors)
If the play chose guard
Skip the RPS logic, and subtract half a point from their score
Otherwise, run the RPS logic
Check to see if the player won against the computer
If so, add one to their score
Check if the player lost
If so subtract one from score
Check for tie
If so, do nothing to score
Once the logic is complete,
show the results of the round: You chose X, computer chose Y. 
update the score
*/

/*
//---------plan--------//
//html
//create
    //div scoreDiv
    //button rock
    //button paper
    //button scissor
    //button guard

//js
// score div set to i
// i =0

For every point scored i++, every point lost i--.

set the computer to math.random, let it select from an array?

[rock,paper,scissor, guard]

P=player C=computer

P3 C (anything) = guarded = -0.5
P0 C0, P1 C1, P2 C2, = tie = +0
P0 C2, P1 C0, P2 C1 = Win = +1
P0 C1, P1 C2, P2 C0 = loss = -1


*/
let score = document.getElementById("scoreDiv");
let playerRock = document.getElementById("R");
let playerPaper = document.getElementById("P");
let playerScissor = document.getElementById("S");
let playerGuard= document.getElementById("G");

let playerScore = 0//starting at 0 points

let rpsgArr= ["rock","paper","scissor","guard"]

score.style.height = 40 +"px";
score.style.width = 200 + "px";
score.style.backgroundColor = "gray"
//score.style.strokeWeight = "2"

score.innerHTML= playerScore


function rival(userMove) {
    let compPlay = Math.floor(Math.random()*3);
    compMove= rpsgArr[compPlay];
    console.log(compPlay)
    console.log(compMove)

    //tie conditions
    if(userMove =='rock'&& compMove == 'rock'){
        score.innerHTML= playerScore + 0//tie
        console.log(score + "tie")
    }
    if(userMove =='paper'&& compMove == 'paper'){
        score.innerHTML= playerScore + 0//tie
        console.log(score + "tie")
    }
    if(userMove =='scissor'&& compMove == 'scissor'){
       score.innerHTML= playerScore + 0//tie
        console.log(score + "tie")
    }

    //document.body.appendChild(score);

    //win conditions
    if(userMove =='rock'&& compMove == 'scissor'){
        score.innerHTML= playerScore+=1; //win
        console.log(score + "win")
    }
    if(userMove =='paper'&& compMove == 'rock'){
        score.innerHTML= playerScore+=1; //win
        console.log(score + "win")
    }if(userMove =='scissor'&& compMove == 'paper'){
        score.innerHTML= playerScore+=1; //win
        console.log(score + "win")
    }

    //document.body.appendChild(score);
//Jacobs note: score seeming to be working in reverse?
    //loss conditions 
    //    |  ||
    //   ||  |/
   
    if(userMove =='rock'&& compMove == 'paper'){
        score.innerHTML= playerScore-=1//loss
        console.log(score + "loss")
    }
    if(userMove =='paper'&& compMove == 'scissor'){
        score.innerHTML= playerScore-=1 //loss
        console.log(score + "loss")
    }
    if(userMove =='scissor'&& compMove == 'rock'){
        score.innerHTML= playerScore -=1 //loss
        console.log(score + "loss")
    } 
    //loss condition guard edition 
    if(userMove == 'guard'){
        score.innerHTML= playerScore -= 0.5 //guard loss
        console.log(playerScore + " guard loss")
    }
}
//document.body.appendChild(score);


console.log()