const person = {
    name: "Alice",
    age: 30,
    address: {
        city: "Springfield",
        state: "IL"
    }
};

const { name, age } = person;
console.log(name);
console.log(age);

const { address: { city, state } } = person;

console.log(city);
console.log(state);