let arr1=[];
let sumArr=0;

console.log("First process")
console.log("------------")
while (arr1.length<5) {
    arr1.push(arr1.length+1);
}
for(let elem of arr1) {
    sumArr = sumArr + elem ;
}
console.log(arr1);
console.log("=> " + sumArr);


console.log("-------------------");
console.log(" ");

console.log("Second process");
console.log("-----------------");

arr1=[];
sumArr = 0;

while (arr1.length<3) {
    arr1.push(arr1.length+100);
}
for(let elem of arr1) {
    sumArr = sumArr + elem ;
}
console.log(arr1);
console.log("=> " + sumArr);