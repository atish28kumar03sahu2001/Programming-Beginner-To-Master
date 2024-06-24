//Prototype Chain
const animal = {
    sound: 'Generic sound',
    makeSound: function() {
        console.log(this.sound);
    }
};

// Create another object that inherits from the animal object
const dog = Object.create(animal);
dog.sound = 'Bark';

// Use the inherited method
dog.makeSound(); // Output: Bark

// Check the prototype chain
console.log(dog.__proto__ === animal); // Output: true