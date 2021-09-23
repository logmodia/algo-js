const readlineSync = require("readline-sync");

console.log("Hello! let's make some calculations with JS");
console.log("Let's start by operation : +");

let a = new Number(readlineSync.question("Write the first number : "));
let b = new Number(readlineSync.question("Write the second number : "));
let result = a + b;
console.log("The result is : " + result);

console.log("Now let's do the next operation : -");

let a1 = new Number(readlineSync.question("Write the first number : "));
let b1 = new Number(readlineSync.question("Write the second number : "));
let result1 = a1 - b1;
console.log("The result is : " + result1);

console.log("Now let's do the next operation : x ");

let a2 = new Number(readlineSync.question("Write the first number : "));
let b2 = new Number(readlineSync.question("Write the second number : "));
let result2 = a2 * b2;
console.log("The result is : " + result2);

console.log("Now let's do the next operation : / or division ");

let a3 = new Number(readlineSync.question("Write the first number : "));
let b3 = new Number(readlineSync.question("Write the second number : "));
let result3 = a3 / b3;
console.log("The result is : " + result3);

console.log("Now let's do the last operation : / or division ");

let a4 = new Number(readlineSync.question("Write the first number : "));
let b4 = new Number(readlineSync.question("Write the second number : "));
let result4 = a4 % b4;
console.log("The result is : " + result4);

console.log("Great! I think i helped you to make some calculations!");

