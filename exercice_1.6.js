const readlineSync = require("readline-sync");

let number1 = new Number(readlineSync.question("Enter the first number please : "));
let number2 = new Number(readlineSync.question("Enter the second number please : "));

let resultat=Math.trunc(number1) % Math.trunc(number2);

console.log(resultat);