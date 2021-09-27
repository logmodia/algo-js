//The program calculates the surface of a rectagle
//The user is asked to enter the width and the height of the rectangle, then the program calculates and disply the result.

const readline = require("readline-sync");

function calcSuface(width,height) {
    return width * height;
}

console.log(" ")
console.log("Welcome to Rect CalcSurface");
console.log("***************************");
console.log("Enter the width and the height of your rectangle to calculate it surface");
console.log(" ");

let L= readline.question("Enter the with of your rectangle : ");
let l= readline.question("Enter the height of your rectangle : ");

console.log(" ");
console.log("The surface of your rectangle equals to : " + calcSuface(L,l));
console.log(" ");