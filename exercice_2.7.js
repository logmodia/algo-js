const readlineSync = require("readline-sync");

let n = 0;
let n2 = 0;
let sumN = 0;
n = new Number(readlineSync.question("Write a number between 5 and 10 : "));
console.log("--------------------------------------------------");

if ((n>=5) && (n <= 10)) {
    for (let i = 1; i <= n; i +=1) {
        n2 = new Number(readlineSync.question("Write any number : "));
        sumN = sumN+n2;
    }
    console.log("--------------------------------------------------");
    console.log("The sum of your " + n + " last number is : " + sumN);

} else {
    console.log("Sorry; the number you have entered is not between 5 and 10");
    console.log("--------------------------------------------------");
}