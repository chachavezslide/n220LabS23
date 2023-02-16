/* Write a loop that prints to the console the numbers 1 to 10, counting forward
- Given the array: let words = [ "Indiana", "University", "Purdue", "University", "Indianapolis" ],
 write a loop that generates the string "Indiana! Yeah! University! Yeah! Purdue! Yeah! Indianapolis! Yeah!". 
 Log the string out to the console.

- Given the array: let words = [ "Indiana", "University", "Purdue", "University", "Indianapolis" ],
 write a loop that capitalizes the words in the array using the .toUpperCase() string method. 4
 Log the modified array out to the console.

- Write a loop that prints to the console the numbers 10 to 1,
 counting backwards

- Write a loop that prints to the console the first 20 numbers of the Fibonacci sequence ( starting at zero, the next number in the sequence is the sum of the previous two numbers: 0, 1, 1, 2, 3, 5, 8, 13.... and so on 

- Given the array: let words = [ "Indiana", "University", "Purdue", "University", "Indianapolis" ], write a loop that reverses the array. Log the reversed array out to the console. 
*/ 
/*
let i = 0;
while ( i < 10){
    i++;
    console.log(i);
}


let myArr= ["Indiana","University","Purdue","University", "Indianapolis"]

for(let i = 0; i < myArr.length; i++){
    myArr[i] = myArr[i].toUpperCase();
    console.log(myArr[i]+"yeah")
}


for(let i= 10; i > 0; i--){
    console.log(i);
}
*/
/*Write a loop that prints to the console the first 20 numbers of the Fibonacci sequence 
( starting at zero, the next number in the sequence is the 
sum of the previous two numbers: 0, 1, 1, 2, 3, 5, 8, 13.... and so on */

let fibonacci = [0, 0, 1, 2 ,3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711]

while ( fibonacci < 20){
    console.log(fibonacci[i]);
}