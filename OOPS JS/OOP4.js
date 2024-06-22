class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display(){
        console.log(`${this.name} -- ${this.age}`);
    }
}
//OOP Object
let p1 = new Person("John Doe",25);
p1.display();

let p2 = new Person("Monu Rey", 21);
p2.display();