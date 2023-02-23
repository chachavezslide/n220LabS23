/*
--------------------------------------------------------------------------------------------------------------

4 - Favorray

Create a string array. List at least five of your favorite things in that array.

Then, write a loop that writes to a div element each of them, with the string ", is one of my favorite things." after the thing.
 For instance, one line in the div might say, "Pizza, is one of my favorite things."

//create an array of 5 favorite things ["Calvin Fletchers","Amberson","Parlor","Leviathan","Tinker"] 

// maybe edit the string to say "places" rather than things, given the context??

//while i<5, write iterand string
//"iterand string"+ "is one of my favorite places"
*/
let favorites = document.getElementById("favCoffee");

favorites.style.width = 500 +"px";
favorites.style.height = 500 +"px";
favorites.style.backgroundColor = "gray"; //div details

let myArr = ["Calvin Fletchers","Amberson","Parlor","Leviathan","Tinker"] ; //array of top 5 coffee choices, no order!

for(let i= 0; i<5; i++){ // run through the array up to 5 aka 0 through 4
    let itemSelected = myArr[i];  // write the value of the array selected.
    console.log(itemSelected + " is one of my favorite places!" + "<br />");
    favorites.innerHTML += itemSelected + " is one of my favorite places!" + "<br />";  // "calvin fletcher"+ "is one of my favorite places"
}




