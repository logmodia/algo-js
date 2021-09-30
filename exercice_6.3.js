class animal {
    constructor(name){
        this.name = name;
    }
    static greeting = "Hello, ";

    sayHello() {
        return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
}

class cat extends animal {
    greeting(){
        super.sayHello();
    }
}
class dog extends animal {
    greeting(){
        super.sayHello();
    }
}

let newCat = new cat("Kitty");
let newDog = new dog("Carl");

console.log(" ");
console.log(`Object cat => ${newCat.sayHello()}`);
console.log(`Object dog => ${newDog.sayHello()}`);
console.log(" ");