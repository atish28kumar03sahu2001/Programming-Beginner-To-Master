//Bind
function greet(greeting, punct) {
    console.log(greeting+","+this.name+punct);
}
const person = {name: "John"};
const greetAlice = greet.bind(person, "hello");
greetAlice("!");