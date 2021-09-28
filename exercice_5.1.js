const readlineSync = require("readline-sync");
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




console.log("- serie name : " + tvSerie.name + " - Production year : " + tvSerie.prodYear + " - Cast members : " + tvSerie.castMembers);