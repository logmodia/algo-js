//Calculation of a dynamic array numbers average

let arr1=[];
let sumArr=0;
let average = 0;

console.log("First process");
console.log("-------------");

while (arr1.length<5) {
    arr1.push(arr1.length+1);
}

for(let elem of arr1) {
    sumArr = sumArr + elem ;
}

average=sumArr/arr1.length;

console.log("Average => " + average);
console.log(" ");

arr1=[];
sumArr = 0;
average=0;

console.log("Second process");
console.log("-------------");

while (arr1.length<3) {
    arr1.push(arr1.length+100);
}
for(let elem of arr1) {
    sumArr = sumArr + elem ;
}

average=sumArr/arr1.length;

console.log("Average => " + average);
console.log(" ");