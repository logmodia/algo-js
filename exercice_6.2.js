class person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    sayHello(){
        return "Hello, " + this.firstname +" "+this.lastname + "!";
    }
}

const newPerson = new person("René","Logala Modia");

console.log(" ");
console.log(newPerson.sayHello());
console.log(" ");