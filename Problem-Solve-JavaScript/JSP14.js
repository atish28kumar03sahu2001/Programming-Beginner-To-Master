/*Swapping Of Two Number Without Using Third Variable*/
const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("Enter Num1 : "));
let num2 = parseInt(prompt("Enter Num2 : "));
console.log(`num1 : ${num1}  , num2: ${num2}`);

num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;
console.log(`num1 : ${num1}  , num2: ${num2}`);

num2 = num2 + num1;
num1 = num2 - num1;
num2 = num2 - num1;
console.log(`num1 : ${num1}  , num2: ${num2}`);