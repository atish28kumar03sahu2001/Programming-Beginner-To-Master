/*Perfect Number*/
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter Num : "));
let count = 0;
for(let i = 1; i < n; i++)  {
    if(n % i === 0) count += i;
}
if(count === n) console.log("Perfect Number");
else console.log("Not A Perfect Number");