//Nested Object
const person = {
    name: "Alice",
    age: 30,
    address: {
        street: "123, Main Street",
        city: "Spring",
        state: "IL",
        country: "USA",
    }
}
console.log(person.name);
console.log(person.address.state);