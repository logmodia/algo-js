const readlineSync = require("readline-sync");

let number1 = new Number(readlineSync.question("Enter a decimal number please : "));
let number2 = new Number(readlineSync.question("Enter a no-decimal number please : "));

let resultat=Math.trunc(number1)*number2;

console.log(resultat);
