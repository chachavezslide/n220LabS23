let coolThing = document.getElementById ("coolThing")

function checkResponse(time){
    console.log(time);

    //if time is... the current time for this lab
    if (time == "morning"){
        //the display "That is correct" in another div
        coolThing.innerHTML = "That is correct!";
    } else {
        coolThing.innerHTML = "Guess again";
    }
    //Otherwise
        //display "Guess again" in another div
}