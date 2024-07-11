/*Swapping Of Two Number Using Third Variable*/
const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("Enter Num1 : "));
let num2 = parseInt(prompt("Enter Num2 : "));
console.log(`num1 : ${num1}  , num2 : ${num2}`);
let swap = num1;
num1 = num2;
num2 = swap;
console.log(`num1 : ${num1}  , num2 : ${num2}`);
let swap1 = num2;
num2 = num1;
num1 = swap1;
console.log(`num1 : ${num1}  , num2 : ${num2}`);