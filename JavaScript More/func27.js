function RegularFunction(name) {
    this.name = name;
}
const obj = new RegularFunction('John');
console.log(obj.name); // Logs: 'John'

const ArrowFunction = (name) => {
    this.name = name;
};
// Attempting to use an arrow function as a constructor will throw an error
const obj1 = new ArrowFunction('John'); // Error: ArrowFunction is not a constructor
console.log(obj.name);