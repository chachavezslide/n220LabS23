/* instructions
Given the words: “Cirro”, “cumulo”, “nimbo”, and “strato”,
 write a loop that displays all of the words on the document, with the word “and” in between. 
 This loop should have two lines of code maximum in its block.
  End result will look like “Cirro and cumulo and nimbo and strato and”. 
  Use of array methods such as concat not allowed.  

*/
//ngl, I dont event remember concat, or if i even know that one lmao


let clouds = document.getElementById("cloudType");

clouds.style.width = 100 + "px";

let cloudArr = ["cirro", "cumulo","nimbo","strato"]; //cloud names 

for(let i=0; i<4; i++){     //for loop should run for the length of the array, write each value of the array and add "and" to each time it runs. Ideally it should be able to delete the last "and" However its not worth spliting hairs over atm.
let type = cloudArr[i]; //run all the values of the array 
clouds.innerHTML += type +" and" +" "   //write out the cloud type, plus " and" plus an extra space. 
console.log(cloudArr[i] +" and") // tester
}

console.log();
