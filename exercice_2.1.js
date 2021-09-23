const readlineSync = require("readline-sync");

let age =new Number(readlineSync.question("Enter your age please : "));

if (age >= 18) {
    console.log("You are an adult");
    
} else {
    console.log("You are not yet an adult");
}