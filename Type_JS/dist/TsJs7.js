"use strict";
//Object In TypeScript
let obj1 = {
    name: "Username1",
    age: 15,
    mail: "user1@mail.com"
};
console.log(obj1);
let obj2 = {
    name: "user1",
    age: 25,
    phone: 1234567890
};
console.log(obj2);
//Class In OOPS
class Person {
    // Constructor to initialize the properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method to get the person's details
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
    // Method to update the person's age
    updateAge(newAge) {
        if (newAge > 0) {
            this.age = newAge;
        }
        else {
            console.log('Please enter a valid age.');
        }
    }
}
// Creating an instance of the Person class
const person1 = new Person('Alice', 30);
// Using the methods
console.log(person1.getDetails()); // Output: Name: Alice, Age: 30
person1.updateAge(31);
console.log(person1.getDetails()); // Output: Name: Alice, Age: 31
//
