let arr1 = ["a","b","c","d"];
let arr2 = [];

console.log("Using Push");
console.log("-----------");
console.log(" ");

for (let elem of arr1) {
    arr2.push(elem);
}

console.log("Array 1 => " + arr1 + " => Array 2 => " + arr2);

console.log(" ");
console.log("Methode with Cpy");
console.log("-----------------");
console.log(" ");

arr2 = [];
arr2 =arr1;

console.log("Array 1 => " + arr1 + " => Array 2 => " + arr2);
console.log(" ");
