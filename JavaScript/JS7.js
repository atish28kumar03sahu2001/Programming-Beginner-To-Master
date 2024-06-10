//Block Scoped
function constExample() {
    const d = 10;
    if (true) {
        const d = 20;
        console.log(d);
    }
    console.log(d);
}
constExample();

//Hoisting
console.log(e);
const e = 5;
console.log(e);

//Cannot be reassigned or redeclared
const f = 10;
//const f = 20;
//f = 20
console.log(f);

//Modification Of Objects Of Arrays Held By Const
const arr = [1,2,3,4,5];
arr.push(4);
console.log(arr);

const obj = {name: "alice"};
obj.age = 25;
console.log(obj);