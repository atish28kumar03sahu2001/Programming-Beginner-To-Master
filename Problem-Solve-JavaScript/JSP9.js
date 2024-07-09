/*Print Even & Odd Number From Specific Range*/
const prompt = require("prompt-sync")();
let r1 = parseInt(prompt("Enter Range1 : "));
let r2 = parseInt(prompt("Enter Range2 : "));
for(let i = r1; i <= r2; i++)   {
    if(i % 2 === 0) console.log(i);
}
console.log("-------------------");
for(let i = r1; i <= r2; i++)   {
    if(i % 2 !== 0) console.log(i);
}