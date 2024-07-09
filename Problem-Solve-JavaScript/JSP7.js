/*Whether the number is even or odd*/
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter Number : "));
if (num % 2 === 0)  console.log("Even");
else console.log("Odd");