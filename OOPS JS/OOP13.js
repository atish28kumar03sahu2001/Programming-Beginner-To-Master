class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`${this.name}--${this.age}`);
    }
}
let p1 = new Person("John Doe", 40);
p1.greet();
console.log(p1.name);