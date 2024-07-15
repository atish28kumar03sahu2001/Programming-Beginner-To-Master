/*Calculate the sum of all numbers between 1 and N (inclusive) that are multiples of a given integer X.*/
let r1 = parseInt(prompt("Enter Range1 Value : ")||"0",10);
let r2 = parseInt(prompt("Enter Multiple Value : ")||"0",10);
let sum:number = 0;
for(let i:number = 1; i <= r1; i++){
    if(i % r2 === 0) sum += i;
}
console.log(sum);