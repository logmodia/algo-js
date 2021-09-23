const readlineSync = require("readline-sync");

let minAge = new Number(readlineSync.question("Enter the min age : "));
let currentAge = new Number(readlineSync.question("Enter the current age : "));
let maxAge = new Number(readlineSync.question("Enter the max age : "));

if ((minAge < currentAge) && (currentAge < maxAge)) {
    console.log (minAge + " is between : " + currentAge + " and : " + maxAge);
} else if (minAge > maxAge) {
    console.log ("Dear user, the minAge must not be biger than maxAge. So you have not understood the rules.");
}