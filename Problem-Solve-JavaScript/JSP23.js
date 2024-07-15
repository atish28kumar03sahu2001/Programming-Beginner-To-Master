/*Calculate the sum of all numbers between 1 and N (inclusive) that are multiples of a given integer X.*/
const prompt = require("prompt-sync")();
let r = parseInt(prompt("Enter Range : "));
let x = parseInt(prompt("Enter Multiple : "));
let sum = 0;
for(let i = 1; i <= r; i++){
    if(i % x === 0) sum += i;
}
console.log(sum);