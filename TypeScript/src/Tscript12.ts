//OF OPERATOR
interface person1 {
    name: string, email: string
}
const myObj2:person1 = {
    name: "LIPUN SAHU",
    email: "LIPUNSAHU@MAIL.COM",
}
const getName1 = ():string => {
    return myObj2["name"];
}
const getEmail1 = ():string => {
    return myObj2["email"];
}
const GetDatap1 = (key: keyof person1): string => {
    return myObj2[key];
}
console.log(GetDatap1("name"));
console.log(GetDatap1("email"));

/*******************************************/
interface person2 {
    name: string, email: string
}
const myObj3:person2 = {
    name: "MAKS SAAHO",
    email: "MAKSSAAHO@MAIL.COM",
}
let key = "name";
let key1 = "email";
console.log(myObj3[key as keyof person2]);
console.log(myObj3[ key1 as keyof typeof myObj3]);
const GetDatap2 = (key: keyof person2): string => {
    return myObj3[key];
}
console.log(GetDatap2("name"));
console.log(GetDatap2("email"));