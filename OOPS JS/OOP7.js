//Object.freeze()
let obj1 = {a:1};
Object.freeze(obj1);
obj1.a = 2;
console.log(obj1);

//Object.getOwnPropertyDescriptor()
let obj2 = {a: 1};
let descriptor = Object.getOwnPropertyDescriptor(obj2, 'a');
console.log(descriptor);

//Object.getOwnPropertyDescriptors()
let obj3 = {a: 1};
let descriptors = Object.getOwnPropertyDescriptors(obj3);
console.log(descriptors);

//Object.getOwnPropertySymbols()
let obj4 = Symbol('a');
let obj5 = Symbol('b');
let res1 = {
    [obj4]: 'value1',
    [obj5]: 'value2',
};
console.log(Object.getOwnPropertySymbols(res1));

//Object.getOwnPropertyNames()
let obj6 = {a: 1, b: 2, c: 3};
console.log(Object.getOwnPropertyNames(obj6));