const readlineSync = require("readline-sync");

let firstName = readlineSync.question("Can you enter your first name please ? : ");
let yourname = readlineSync.question("Can you enter your name please ? : ");
let yourcity = readlineSync.question("Can you enter your city please ? : ");

console.log("Your name is "+ firstName +" "+ yourname + " and you live in "+ yourcity);
