/*Automorphic Number */
let num:number = 1245;
if(num < 0) num = -num;
let sq:number = num * num;
let temp:number = num;
let count:number = 0;
while(temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
}
let lastdigit = sq % Math.pow(10,count);
console.log(`The Automorphic Number ${num} Is ${lastdigit === num ? `Yes` : `No`}`)