const readlineSync = require("readline-sync");

let xnumber = readlineSync.question("Write a number please : ");

while (xnumber != 42) {
    console.log("This is not the magic number. The program will end until you find out the magic number :)")
    console.log(" ")
    xnumber = readlineSync.question("Write a number please : ");
} 

console.log("Great! You got it!");