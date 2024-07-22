/*Factor Of A Number*/
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter Num : "));
for(let i = 1; i < num; i++){
    if(num % i === 0)   console.log(i);
}