let fact = 0;
let decompFact =0;

const factorial = (x) => {
    /* if (x > 0 && fact === 0 ) {
        fact = x;
        decompFact = x + "! ";
        console.log(decompFact,fact);
    } else if (x > 1) {
        x = x - 1;
        fact = fact * x;
        
        decompFact = decompFact + " " + x + " * ";
        //return fact * x;
        console.log(decompFact,fact);
    } else {
        //return fact * x;
        //factorial(x-1);

        console.log(decompFact,fact);
    } */

    if (x == 0) {
        console.log(x);
        
    } else {
        factorial(x - 1);
    }
    console.log(x);
    
}

let a =0;
a =factorial(10);
//console.log(decompFact);
console.log(a);