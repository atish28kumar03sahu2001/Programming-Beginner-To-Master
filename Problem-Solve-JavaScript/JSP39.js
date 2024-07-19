/*Root Of A Number*/
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter Num : "));
let r = parseInt(prompt("Enter Root : "));
console.log(Math.pow(n, 1/r));