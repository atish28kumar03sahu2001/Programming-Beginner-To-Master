/*Perfect Square Number*/
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter Num : "));
if(Math.ceil(Math.sqrt(num)) === Math.floor(Math.sqrt(num)))
    console.log("Perfect Squar Number");
else  console.log("Not Perfect Sqaure Number");