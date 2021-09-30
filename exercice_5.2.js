const readlineSync = require("readline-sync");
let arr1 = ["a","b","c","d", "a"];

let stopKey = 1;


let tvSerie = {
castMembers:[],
};

tvSerie.name = readlineSync.question("Enter the name please : ");
tvSerie.prodYear = readlineSync.question("Enter the year please : ");

do {
    
    tvSerie.castMembers.push(readlineSync.question("Enter a member please : "));
    stopKey = parseInt(readlineSync.question("Enter 1 to contunue or 0 to finish the member list : "));

} while(parseInt(stopKey) == 1 );


const randomizeCast = (...arr) => {

    
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        
    }

    return arr;
}

console.log(" ");
console.log("-----------------------------------------------------------------");

console.log(`- serie name : ${tvSerie.name} - Production year : ${tvSerie.prodYear} - Cast members : ${randomizeCast(...tvSerie.castMembers)}`);

console.log(" ");
