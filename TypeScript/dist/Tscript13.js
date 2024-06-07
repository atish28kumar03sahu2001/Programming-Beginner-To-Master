"use strict";
const Useru = {
    name: "AKS",
    email: "AKS@MAIL.COM"
};
const Useru1 = {
    name: "AKS",
    email: "AKS@MAIL.COM"
};
const Users = {
    john: { age: 22 },
    viky: { age: 25 },
    Maks: { age: 21 },
    Monty: { age: 23 }
};
//Parameters<Type>
const myFunc = (a, b) => {
    console.log(a + b);
};
//ConstructorParameters<Type>
class SampleClass {
    constructor(s, t) {
        this.s = s;
        this.t = t;
    }
}
//ReturnType<Type>
const myFunc1 = (a, b) => {
    return a + b;
};
//InstanceType<Type>
class SampleClass1 {
    constructor(s, t) {
        this.s = s;
        this.t = t;
    }
}
const user5 = {
    s: "SSS",
    t: "TTTT"
};
