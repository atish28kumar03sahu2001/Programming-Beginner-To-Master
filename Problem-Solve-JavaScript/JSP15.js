/*Fibonacci Series*/
const prompt = require("prompt-sync")();
let range = parseInt(prompt("Enter Range : "));
let n1 = 0; 
let n2 = 1;
for(let i = 0; i < range; i++){
    console.log(n1);
    let temp = n1 + n2;
    n1 = n2;
    n2 = temp;
}