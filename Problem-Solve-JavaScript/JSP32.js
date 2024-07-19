/*Write a program to return the reverse of a number n = 123 output = 321*/
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter Num : "));
let rev = 0;
while(n !== 0){
    let rem = n % 10;
    rev = (rev * 10) + rem;
    n = Math.floor(n / 10);
}
console.log(rev);