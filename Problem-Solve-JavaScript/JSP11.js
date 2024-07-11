/*Whether The Number Is Positive Or Negative Or 0*/

const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter Number : "));
if(n < 0) console.log(`${n} is a negative number`);
else if (n > 0) console.log(`${n} is a positive number`);
else console.log(`${n} value is 0`);