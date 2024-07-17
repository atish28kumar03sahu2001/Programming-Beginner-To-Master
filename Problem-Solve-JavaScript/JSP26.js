/*Compute the factorial of a given number using a loop.*/
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter Num : "));
let fact = 1;
for(let i = 1; i <= n; i++){
    fact *= i;
}
console.log(fact);