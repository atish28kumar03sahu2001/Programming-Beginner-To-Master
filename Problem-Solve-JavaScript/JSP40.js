/*nCr & nPr of number*/
const prompt = require("prompt-sync")();
let N = parseInt(prompt("Enter N : "));
let R = parseInt(prompt("Enter R : "));
let NR = N-R, temp1 = 1, temp2 = 1, temp3 = 1;
for(let i = 1; i <= N; i++)	temp1 *= i;
for(let j = 1; j <= R; j++)	temp2 *= j;
for(let k = 1; k <= NR; k++)    temp3 *= k;
console.log(`nCr : ${temp1/(temp2 * temp3)}`);
console.log(`nPr : ${temp1 / temp3}`);