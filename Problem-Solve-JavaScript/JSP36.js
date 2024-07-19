/*Sum Of All Odd & Even Number From 1 to N*/
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter Num : "));
let ce = 0, co = 0;
for(let i = 1; i <= n; i++){
    if(i % 2 === 0) ce += i;
    else co += i;
}
console.log(`Even : ${ce} Odd : ${co}`);