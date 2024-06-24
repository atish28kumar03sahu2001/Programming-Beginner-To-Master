//Object Literal & Object Constructor
//Object Literal
let person = {
    name: "Alice",
    age: 30,
    greet: function(){
        console.log(`hello ${this.name}`);
    }
};
person.greet();

//Object Constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function() {
    console.log(`Hello ${this.name}`);
}
const p1 = new Person("Alice",30);
const p2 = new Person("Bob",25);
p1.greet();
p2.greet();