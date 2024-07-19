/*nCr & nPr of number*/
let p1:number = 5;
let p2:number = 2;

let NR:number = p1 - p2, temp1:number = 1, temp2: number = 1, temp3:number = 1;

for(let i:number = 1; i <= p1; i++) temp1 *= i;
for(let j:number = 1; j <= p2; j++) temp2 *= j;
for(let k:number = 1; k <= NR; k++) temp3 *= k;
console.log(`nCr: ${temp1 / (temp2 * temp3)}`);
console.log(`nPr : ${temp1 / temp3}`);