"use strict";
let v1 = 2500;
console.log(v1);
let v2 = "MAKS VOID";
console.log(v2);
let v3 = "VOID MAKS";
let v4 = 152364789;
let v5 = false;
let v6; //`any` if you don't give any datatype
let v7;
let v8 = "Deva";
//union variable
let surname;
let func1 = (a1, a2) => {
    console.log(a1, a2);
};
func1(15, "22");
let func2 = (a1, a2) => {
    console.log(a1, a2);
};
func2(10, 20);
let func3 = (a1, a2) => {
    return a1 * a2;
};
console.log(func3(10, 50));
let a = 30;
console.log(a);
let b = "ABCD";
console.log(b);
let func4 = (v1, v2) => {
    return v1 * v2;
};
console.log(func4(50, 35));
//TypeScript Array
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = ['a', 'd', 'f', 'e'];
const arr3 = ["a", "v", "l", "r", "t"];
const arr4 = new Array(10);
const arr5 = [1, "a", 2, "b", 3, "c"];
const arr6 = ["a", "A", "b", "B", "c", "C", "d", "D"];
arr6.forEach(i => {
    console.log(i.toUpperCase());
});
//Tupple Example
let arr7 = [12, "A", 15, "B"];
const OBJ1 = {
    height: 5.5,
    weight: 88,
    gender: false
};
console.log(OBJ1);
const OBJ2 = {
    height: 5.5,
    weight: 88,
};
console.log(OBJ2);
const OBJ3 = {
    name: "MAKS VOID",
    age: 25,
};
console.log(OBJ3);
const OBJ4 = {
    name: "VOID MAKS1",
    age: 24,
    gender: false
};
console.log(OBJ4);
