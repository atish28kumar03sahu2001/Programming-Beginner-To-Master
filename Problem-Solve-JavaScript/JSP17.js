/*Write a program to print the largest of the three numbers.*/
const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("Enter Num1 : "));
let num2 = parseInt(prompt("Enter Num2 : "));
let num3 = parseInt(prompt("Enter Num3 : "));
if(num1 > num2 && num1 > num3)  console.log(num1 + " is Largest");
else if (num2 > num1 && num2 > num3)    console.log(num2 + " is Largest");
else console.log(num3 + " is Largest");