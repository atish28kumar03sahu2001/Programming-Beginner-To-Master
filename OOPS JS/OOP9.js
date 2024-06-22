//Object.keys()
let obj1 = {a: 1, b: 2, c: 3};
console.log(Object.keys(obj1));

//Object.preventExtensions()
let obj2 = {a: 1};
Object.preventExtensions(obj2);
obj2.b = 2;
console.log(obj2.b);

//Object.setPrototypeOf()
let obj3 = {name: "Maks Void"};
let res1 = {};
Object.setPrototypeOf(obj3, res1);
console.log(res1);

//Object.seal()
let obj4 = {a: 1};
Object.seal(obj4);
obj4.b = 2;
console.log(obj4);

//Object.values()
let obj5 = {a: 1, b: 2, c: 3};
console.log(Object.values(obj5));