//Object.assign()
let obj1 = {a: 1, b: 2};
let obj2 = {b: 4, c: 5};
let res1 = Object.assign(obj1, obj2);
console.log(obj1);
console.log(obj2);
console.log(res1);

//Object.create()
const obj3 = {greeting: "hello"};
let res2 = Object.create(obj3);
console.log(obj3);
console.log(res2);

//Object.defineProperty()
const obj4 = {};
Object.defineProperty(obj4,'name',{
    value: 'John',
    writable: true,
    enumerable: true,
    configurable: true
})
console.log(obj4.name);

//Object.defineProperties()
let obj5 = {};
Object.defineProperties(obj5,{
    name: {
        value: 'john',
        writable: true
    },
    age: {
        value: 30,
        writable: false
    }
});
console.log(obj5);

//Object.entries()
let obj6 = {a: 1, b: 2, c: 3};
console.log(Object.entries(obj6));