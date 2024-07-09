/*Print Even & Odd Number From 1 to N*/
const prompt = require("prompt-sync")();
let r = parseInt(prompt("Enter Range : "));
for (let i = 1; i <= r; i++)    {
    if(i % 2 === 0) console.log(i);
}
console.log("-----------------------")
for (let i = 1; i <= r; i++)    {
    if(i % 2 !== 0) console.log(i);
}