/*Compute the natural logarithm of 2 by adding up to n terms in the series 1 – ½ + 1/3 – ¼ + 1/5 - ……….. 1/n where n is a positive integer and input by user.*/
const prompt = require("prompt-sync")();
let sum = 0;
let num = parseInt(prompt("Enter Num : "));
for(let i = 1; i <= num; i++){
    if(i % 2 === 1) sum += 1.0 / i;
    else sum -= 1.0 / i;
}
console.log(sum);