"use strict";
//Currying In JavaScript
function curryAdd(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}
console.log(curryAdd(1)(2)(3));
//Memorization
function fibo(n) {
    if (n <= 1)
        return n;
    return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(10));
//Thunk In JavaScript
const addd = (a, b) => () => a + b;
const addT = addd(5, 10);
console.log(addT());
function createThunk(value) {
    return function () {
        return value;
    };
}
const thunk = createThunk(42);
console.log(thunk());
//Tail Recursion
function fact(n, acc = 1) {
    if (n === 0) {
        return acc;
    }
    return fact(n - 1, n * acc);
}
console.log(fact(5));
