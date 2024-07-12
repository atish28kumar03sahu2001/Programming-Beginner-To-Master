/*Write a program to print the largest number of the two numbers */
const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("Enter Num1 : "));
let num2 = parseInt(prompt("Enter Num2 : "));
if(num1 > num2) console.log(`${num1} is greater than ${num2}`);
else    console.log(`${num2} is greater than ${num1}`);