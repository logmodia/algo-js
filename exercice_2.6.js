const readlineSync = require("readline-sync");

let day = readlineSync.question("Write a number 1 to 7 to see the corresponding day : "); 

switch (day) { 
    case "1": 
        console.log("Monday"); 
        break; 

    case "2": 
        console.log("Tuesday"); 
        break; 
    case "3": 
        console.log("Wednesday"); 
        break; 
    case "4": 
        console.log("Thursday"); 
        break; 
    case "5": 
        console.log("Friday"); 
        break; 
    case "6": 
        console.log("Saturday"); 
        break; 
    case "7": 
        console.log("Sunday"); 
        break; 

    default:
        console.log("Your number is not between 1 and 7"); 
} 
