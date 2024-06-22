//Object.getPrototypeOf()
let obj1 = {val1: "Maks Void"};
let res1 = Object.create(obj1);
console.log(Object.getPrototypeOf(res1));

//Object.is
console.log(Object.is(25, 25));
console.log(Object.is(NaN, NaN));
console.log(Object.is(0, -0));

//Object.isExtensible()
let obj2 = {a: 1};
console.log(Object.isExtensible(obj2));
Object.preventExtensions(obj2);
console.log(Object.isExtensible(obj2));

//Object.isFrozen()
let obj3 = Object.freeze({a: 1});
console.log(Object.isFrozen(obj3));

//Object.isSealed()
let obj4 = Object.seal({a: 1});
console.log(Object.isSealed(obj4));