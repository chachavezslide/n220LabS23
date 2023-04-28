let name="";
let txtUsername = document.querySelector("#txtUSername")
let greetingZone = document.querySelector("#greetingZone")


greetingZone.innerHTML = "hello "
function gatherUsername(){

    usrname = txtUsername.value;

    greetingZone.innerHTML = `Hello ${usrName}`;

    localStorage.setItem("useName", usrName);
}