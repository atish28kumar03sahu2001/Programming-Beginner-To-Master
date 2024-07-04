"use strict";
//First Class Function
const greet1 = function (name) {
    return `hello ${name}`;
};
console.log(greet1("John"));
//Generator Function
function* counter() {
    let count = 0;
    while (count < 3) {
        yield count++;
    }
}
const counterInstance = counter();
console.log(counterInstance.next().value); // 0
console.log(counterInstance.next().value); // 1
console.log(counterInstance.next().value); // 2
console.log(counterInstance.next().value); // undefined
//Recursive Function
function fibo(n) {
    if (n <= 1) {
        return n;
    }
    return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(6));
