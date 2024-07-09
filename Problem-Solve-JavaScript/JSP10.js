/*The Number Is Leap Year Or Not*/
const prompt = require("prompt-sync")();
let year = parseInt(prompt("Enter Year : "));
if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
    console.log(`${year} is leap year`);
else
    console.log(`${year} is not leap year`);