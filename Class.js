//creating class
class Person{
    constructor(firstName,secondName){
        this.firstName = firstName;
        this.secondName = secondName;
    }
    sayHello(){
        console.log(`Hello my name is ${this.firstName} is waving you Ms ${this.secondName}`)
    }
}

//creating instance
const person1 = new Person("Farah", "Namira")
person1.sayHello()