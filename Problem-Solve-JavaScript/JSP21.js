/*Print all odd numbers between 1 to N using any loop.*/
const prompt = require("prompt-sync")();
let r = parseInt(prompt("Enter Range : "));
for(let i = 1; i <= r; i++) {
    if (i % 2 !== 0)    console.log(i);
}