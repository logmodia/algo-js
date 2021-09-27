//The program----------------------------
/* Ask the user to enter a number (n)
Then the program generate an array of n random numbers, and it displays the Max and the Min of that random array numbers */

const readlineSync = require("readline-sync");

let arr1 = [1,2,3,4,5];
let average = 0;
let Random_arr = [];

//Random function-------------------------
function rand10 () {
    return parseInt(Math.random()*(10 - 1));
}

//OVERAGE function-------------------------
var f_average = (...arr) => {
    
    for (let elem of arr) {
        average = average + elem;
    }

   return average = average/arr.length;
};

//console.log(f_average(...arr1))

//MINIMUM function-------------------------
var f_min = (...arr) => {
    
    return Math.min(...arr);
}

//console.log(f_average(...arr1));

//MAXIMUM function--------------------------------
var f_max = (...arr) => {
    
    return Math.max(...arr);
}


let n = readlineSync.question("How many random numbers do you want : ");

for (let i=0; i < n; i++) { //Pushing random numbers in the empty array (Random_arr)
    Random_arr.push(rand10());
}

console.log(" ");
console.log("Random array => ",Random_arr);

console.log(" ")
console.log("Average => " + f_average(...Random_arr));

console.log(" ");
console.log("Max => " + f_max(...Random_arr));

console.log(" ");
console.log("Min => " + f_min(...Random_arr));
console.log(" ");