"use strict";
const myObj2 = {
    name: "LIPUN SAHU",
    email: "LIPUNSAHU@MAIL.COM",
};
const getName1 = () => {
    return myObj2["name"];
};
const getEmail1 = () => {
    return myObj2["email"];
};
const GetDatap1 = (key) => {
    return myObj2[key];
};
console.log(GetDatap1("name"));
console.log(GetDatap1("email"));
const myObj3 = {
    name: "MAKS SAAHO",
    email: "MAKSSAAHO@MAIL.COM",
};
let key = "name";
let key1 = "email";
console.log(myObj3[key]);
console.log(myObj3[key1]);
const GetDatap2 = (key) => {
    return myObj3[key];
};
console.log(GetDatap2("name"));
console.log(GetDatap2("email"));
