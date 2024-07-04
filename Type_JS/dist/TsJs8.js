"use strict";
//Inheritance In OOPS
class Person1 {
    // Constructor to initialize the properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method to get the person's details
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
// Inheriting from the Person class
class Student extends Person1 {
    // Constructor to initialize properties from Person and Student
    constructor(name, age, grade) {
        // Calling the constructor of the parent class
        super(name, age);
        this.grade = grade;
    }
    // Method to get the student's details including grade
    getStudentDetails() {
        return `${super.getDetails()}, Grade: ${this.grade}`;
    }
}
// Creating an instance of the Student class
const student1 = new Student('John', 20, 'A');
// Using the methods
console.log(student1.getStudentDetails()); // Output: Name: John, Age: 20, Grade: A
