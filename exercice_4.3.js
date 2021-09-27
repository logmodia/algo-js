const readlineSync = require("readline-sync");
let arr = [];
let randnum = 0;


function rand10 () {
    return parseInt(Math.random()*(10 - 1));
}

/*
for (let i=0; i < 5; i++) {
    arr.push(rand10());
}
 */
//console.log(arr)

let n = readlineSync.question("How many random numbers do you want : ");

for (let i=0; i < n; i++) {
    arr.push(rand10());
}

console.log(arr)


