/*Compute the natural logarithm of 2 by adding up to n terms in the series 1 – ½ + 1/3 – ¼ + 1/5 - ……….. 1/n where n is a positive integer and input by user.*/
let sum:number = 0;
let bum:number = 12;
for(let i:number = 1; i <= bum; i++) {
    if(i % 2 === 1) sum += 1.0 / i;
    else sum -= 1.0 / i;
}
console.log(sum);