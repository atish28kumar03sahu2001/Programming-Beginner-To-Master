"use strict";
//Array, Tuple, Object, In TypeScript
//Array
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(arr1);
let arr2 = ["a", "A", "b", "B", "c", "C", "d", "D"];
console.log(arr2);
let arr3 = [true, false, true, false];
console.log(arr3);
let arr4 = new Array(5);
arr4 = [1, 2, 3, 4, 5];
console.log(arr4);
let arr5 = ["M", "A", "K", "S"];
console.log(arr5);
let arr6 = ["a", 1, "b", 2, "c", 3, "d"];
console.log(arr6);
//Tupple Example
let arr7 = [12, "AKS", 15, "LKS"];
console.log(arr7);
//Object Example
let obj1 = {
    name: "MAKS VOID",
    age: 24,
    email: "MAKSVOID@MAIL.COM"
};
console.log(obj1);
let obj2 = {
    name: "UserName1",
    age: 52,
    email: "UserName1@mail.com",
};
console.log(obj2);
let obj3 = {
    name: "UserName2",
    age: 27,
    email: "UserName2@mail.com",
    gender: false,
};
console.log(obj3);
const obj4 = {
    name: "Name4", age: 34,
};
console.log(obj4);
const obj5 = {
    name: "Name5",
    age: 40,
    email: "name5@mail.com",
    funct1: () => {
        console.log("done");
    }
};
console.log(obj5);
obj5.funct1();
