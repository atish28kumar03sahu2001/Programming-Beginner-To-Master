/*Write a program to print whether a given number is an Armstrong number or not. N = 153 Output: true*/
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter Num : "));
let N = n, res = n;
let rem = 0, count = 0, sum = 0;
while(n !== 0){
    rem = n % 10;
    count++;
    n = Math.floor(n / 10);
}
while(N !== 0){
    let rem1 = N % 10;
    sum += Math.pow(rem1, count);
    N = Math.floor(N/10);
}
if(sum === res) console.log(true);
else console.log(false);