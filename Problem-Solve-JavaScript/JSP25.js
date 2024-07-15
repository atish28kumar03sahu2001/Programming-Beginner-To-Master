/*Print all the perfect squares between 1 and N.*/
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter Num : "));
for(let i = 1; i * i <= n; i++) {
    console.log(i * i);
}