/*If Marks> =40 --> pass	ELSE ---> fail use ternary operator*/
const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("Enter Num1 : "));
let res = (num1 >= 40) ? "Pass" : "Fail";
console.log(res);