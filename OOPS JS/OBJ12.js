//Object Prototype
const parentObject = {
    greet: function () {
        console.log('Hello from the parent object!');
    }
};

const childObject = {
    name: 'Child Object'
};

childObject.__proto__ = parentObject;

childObject.greet(); // Output: Hello from the parent object!
console.log(childObject.name); // Output: Child Object