//The programe gives a random integer each time the function is called

function rand10 () {
    return parseInt(Math.random()*(10 - 1));
}

console.log(rand10());