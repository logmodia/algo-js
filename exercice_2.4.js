let evenNumber = 0;
let oddNumber = 0;

let resultModulo = 0;

for (let i = 1; i < 50; i +=2) {

    resultModulo = i % 2;

    if (resultModulo = 0){

        evenNumber=i/2;
        
        console.log("Even number "+ i + "/" + "2 = " + evenNumber);

    } else {
        oddNumber=i*3;
        console.log("Odd number "+ i + "*" + "3 = " + oddNumber);
    }

    
}