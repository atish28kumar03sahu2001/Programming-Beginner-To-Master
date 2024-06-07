"use strict";
//GENERICS IN TYPESCRIPT
const funcc = (n) => {
    return n;
};
const funr1 = funcc(20);
const funr2 = funcc("20");
const funr3 = funcc(true);
const funcc1 = (n) => {
    return n;
};
const p11 = {
    name: "ppp",
    age: 26,
};
const ans = funcc1(p11);
const ans1 = funcc1(p11);
const arrr = [];
const arrr1 = [];
const funcc2 = (n, o) => {
    return { n, o };
};
const answer1 = funcc2(20, "llll");
const funcc3 = (n, o) => {
    return { n, o };
};
const answer2 = funcc3(20, 50);
const per1 = {
    name: "per11",
    age: 55,
};
const per2 = {
    name: "per22",
    age: 85,
    email: "per22@mail.com"
};
const funcc4 = (n, o) => {
    return { n, o };
};
const answer3 = funcc4(per1, per2);
const users = [
    {
        name: "p1",
        age: 100,
    },
    {
        name: "p2",
        age: 105,
    },
    {
        name: "p3",
        age: 110,
    },
    {
        name: "p4",
        age: 115,
    },
];
const filterByPeople = (arr, property, value) => {
    return arr.filter(item => item[property] === value);
};
const filterPeople = filterByPeople(users, "name", "p3");
console.log(filterPeople);
const filterAge = filterByPeople(users, "age", 115);
console.log(filterAge);
