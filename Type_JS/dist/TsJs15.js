"use strict";
//Function Hoisting
console.log(mult(2, 3));
function mult(a, b) {
    return a * b;
}
console.log(divide1(6, 3));
const divide1 = function (a, b) {
    return a / b;
};
//Apply, call, bind
function greet(greeting, punctuation) {
    console.log(greeting + ',' + this.name + punctuation);
}
const person = { name: "Alice" };
//bind
const greetAlice = greet.bind(person, 'Hello');
greetAlice('!');
//call
greet.call(person, 'Hi', '.');
//apply
greet.apply(person, ['Hey', '!']);
