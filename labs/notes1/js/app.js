let myAudio = document.getElementById("myAudio");
let uiholder = document.getElementById("uiHolder");

/* this.body.addEventListener("click",function(){
    myAudio.play();
}) */

for( let i=0; i<6; i++){
    let newElement = document.createElement("button");
    newElement.innerHTML = `play ${i}`;
    uiHolder.appendChild(newElement);
    newElement.dataset.startTime = i* 18;
    newElement.addEventlistener("click", playAudioSegment)
}


function playAudioSegment(event){
    console.log(Number(event.target.dataset.startTime));
    myAudio.play();
    /*setTimeout(function(){
        console.log("augh")
     }, 3000); */
     setTimeout(pauseAudio,3000);

}

function pauseAudio(){
    myAudio.pause();
}
//let uiHolder = document.createElement("button");
//ne