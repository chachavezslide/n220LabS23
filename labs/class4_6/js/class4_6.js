//let userNumber = document.getElementById("numField")

/*let twoDee = [
    [0,0,0],
    [2,2,2],
    [0,0,0]
];

let res= twoDee[1].filter( function(entry){
    return entry == 2;
})

console.log(res);*/


//1) Make a 2D array of strings that represents a tic-tac-toe board
//2) Use nested for loops, brute force checks, (or advanced: array.filter) to determine vertical and horizontal win conditions  

let tttSquare = [
    [0,0,0],
    [2,2,2],
    [0,0,0]
];

tttSquare.filter((entry) =>{
    return entry[0] == 2;
})

let result = tttSquare[1].filter(function(entry){
    return entry == 2;
})

if(result.length == 3 ){
    console.log("win")
} else( console.log("lose"))

console.log(result);
