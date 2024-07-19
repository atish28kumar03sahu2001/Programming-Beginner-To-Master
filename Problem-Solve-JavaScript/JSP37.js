/*Sum Of All Number From 1 to N*/
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter A Number : "));
let count = 0;
for(let i = 1; i <= n; i++){
    count += i;
}
console.log(count);