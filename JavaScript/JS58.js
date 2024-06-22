const prompt = require("prompt-sync")();
const OBJ1 = {
    name: "UserName1",
    age: 21,
    flag: true,
    place: "Mumbai",
    number: 1234567890
}
let JOBJ = JSON.stringify(OBJ1);
console.log(JOBJ);

let OBJ2 = `{
    "name" : "User1",
    "age" : 21,
    "position" : "Web Developer",
    "student" : false,
    "plang": ["java","python","c","c++","webdev"],
    "address": {
        "city": "cityname",
        "country": "countryname",
        "pin": 760010,
    }
}`;
let data = JSON.parse(OBJ2);
console.log(data);
console.log(data['age']);
console.log(data[plang][2]);
console.log(data[address][pin]);