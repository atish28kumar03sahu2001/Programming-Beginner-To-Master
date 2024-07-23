/*
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator. The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2. 
Input: dividend = 10, divisor = 3	Output: 3  
Input: dividend = 7, divisor = -3		Output: -2
*/
const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("Enter Num1 : "));
let num2 = parseInt(prompt("Enter Num2 : "));
let output = (n1, n2) => {
    let ans = BigInt(n1) / BigInt(n2);
    if(ans > BigInt(2 ** 31) - BigInt(1))
        ans = BigInt(2 ** 31) - BigInt(1);
    if(ans < BigInt((-2) ** 31))
        ans = BigInt((-2)** 31);
    return parseInt(ans);
}
console.log(output(num1, num2));