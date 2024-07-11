"use strict";
/*Swapping Of Two Number Using Third Variable*/
let val1 = parseInt(prompt("Enter Num1 : ") || "0", 10);
let val2 = parseInt(prompt("Enter Num2 : ") || "0", 10);
console.log(`num1: ${num1} , num2: ${num2}`);
let swap1 = val1;
val1 = val2;
val2 = swap1;
console.log(`num1: ${num1} , num2: ${num2}`);
let swap2 = val2;
val2 = val1;
val1 = swap2;
console.log(`num1: ${num1} , num2: ${num2}`);
