"use strict";
const myObj1 = {
    name: "MAKS VOID",
    email: "MAKSVOID@MAIL.COM",
};
const getName = () => {
    return myObj1["name"];
};
const getEmail = () => {
    return myObj1["email"];
};
const GetDatap = (key) => {
    return myObj1[key];
};
console.log(getName(), getEmail());
console.log(GetDatap("name"));
console.log(GetDatap("email"));
