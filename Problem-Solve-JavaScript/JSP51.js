/*Automorphic Number*/
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter Num : "));
if (num < 0) num = -num;
let sq = num * num;
let temp = num;
let count = 0;
while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
}
let lastdigit = sq % Math.pow(10, count);
console.log(`The Automorphic number is ${lastdigit == num ? 'Yes' : 'No'}`);