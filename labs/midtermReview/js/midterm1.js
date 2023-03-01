/*
These exercises build upon many of the skills that have been introduced in the previous examples of in this class.
 You will be practicing things like loops, if statements, functions, global (application) variable manipulation, 
 and arrays. Often in combination. 

As always, the purpose here is to focus on your algorithm development, your resource identification, 
and your debugging skills. You will need this for the midterm. When you get lost, return to the primary questions of:
 1) What is the data you are manipulating?
  2) How does that data need to change?, and work forward from there.

Exercises

//----------UI Navigation Highlighter------------//

Make an application with six divs on the screen, each with a different word.

When any of the divs is clicked,

highlight that that div by changing its background color and making the text bold
remove the bold/background highlight from any other divs
add the clicked div's text into a seperate div at the top of the screen
 
*/

/*
//---------plan--------//

//html make the divs, class them to "onMouseOver" 
//write words in the html doc? 
//create an "onClick" class and connect it with a function to write the word from the div.
//Do I create a separate div that stores the results with innerHTML on each click? 
Im unsure on how to create a new div each time, or if thats needed.

//js
Tie the divs to the js with the DOM. 
//onMouseOver, change 
// divName.style.backgroundColor = "cyan"

//change the text style to bold

//innerHTML the the word on click so it is added to a div at the top?


*/
let navItem = document.getElementsByClassName("nav");
let logColors = document.getElementById("colorLog");

//base UI
logColors.style.height = 40 + "px";
logColors.style.width = 300 + "px";


for(let i=0; i <6; i++){
  navItem[i].style.height = 20 +"px";
  navItem[i].style.width = 300 + "px";
  navItem[i].style.backgroundColor = "#fff0f0";
  navItem[i].style.fontWeight = "normal";
  
  console.log()
};
//highlighter
//orange
function highlightDiv0(orange){
  for(let i=0; i <6; i++){
    navItem[i].style.fontWeight = "normal";
    navItem[i].style.backgroundColor = "#fff0f0";
navItem[0].style.backgroundColor ="#FBCEB1";
navItem[0].style.fontWeight = "bold"; 
logColors.innerHTML = "orange"  //write the name in the counter
  }
}
//cyan
function highlightDiv1(Cyan){
  for(let i=0; i <6; i++){
    navItem[i].style.fontWeight = "normal";
    navItem[i].style.backgroundColor = "#fff0f0";
navItem[1].style.backgroundColor ="#e0ffff";
navItem[1].style.fontWeight = "bold";
logColors.innerHTML = "cyan"  //write the name in the counter
  }
}
//teal
function highlightDiv2(Teal){
  for(let i=0; i <6; i++){
    navItem[i].style.fontWeight = "normal";
    navItem[i].style.backgroundColor = "#fff0f0";
navItem[2].style.backgroundColor ="#008080";
navItem[2].style.fontWeight = "bold";
logColors.innerHTML = "teal" 
  }
}
//magenta
function highlightDiv3(Magenta){
  for(let i=0; i <6; i++){
    navItem[i].style.fontWeight = "normal";
    navItem[i].style.backgroundColor = "#fff0f0";
navItem[3].style.backgroundColor ="#FF00ff";
navItem[3].style.fontWeight = "bold";
logColors.innerHTML = "magenta" 
  }
}
//lavender
function highlightDiv4(Lavender){
  for(let i=0; i <6; i++){
    navItem[i].style.fontWeight = "normal";
    navItem[i].style.backgroundColor = "#fff0f0";
navItem[4].style.backgroundColor ="#e696FA";
navItem[4].style.fontWeight = "bold";
logColors.innerHTML = "lavender" 
  }
 }
 //ultramarine
function highlightDiv5(Ultramarine){
  for(let i=0; i <6; i++){
    navItem[i].style.fontWeight = "normal";
    navItem[i].style.backgroundColor = "#fff0f0";
navItem[5].style.backgroundColor ="#4166f5";
navItem[5].style.fontWeight = "bold";
logColors.innerHTML = "ultramarine" 
}
console.log()

}

  console.log()