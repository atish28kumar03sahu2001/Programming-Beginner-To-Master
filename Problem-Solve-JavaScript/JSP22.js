/*The task is to find the nth number in the Fibonacci series.*/
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter Range : "));
let n1 = 0;
let n2 = 1;
let res = 0;
for(let i = 0; i < n; i++){
    res = n1;
    let temp = n1 + n2;
    n1 = n2;
    n2 = temp;
}
console.log(res);