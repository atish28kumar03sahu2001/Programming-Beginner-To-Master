//Method Overriding
class Animal {
    speak() {
        console.log("The Animal Make Sound");
    }
}
class dog extends Animal {
    speak() {
        console.log("The Dog Barks");
    }
}
let animal = new Animal();
animal.speak();

let dog = new dog();
dog.speak();