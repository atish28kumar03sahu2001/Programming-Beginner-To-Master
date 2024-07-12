/*
0 through 100 : 5.00, More than 100 but no more than 500 : 8.00
more than 500 but less than 1000 : 10.00, 1000, or more : 12.00
*/
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter Num1 : "));
if(num >= 0 && num <= 100)  console.log("5.00");
else if(num >= 100 && num <= 500) console.log("8.00");
else if (num >= 500 && num <= 1000) console.log("10.00");
else console.log("12.00");