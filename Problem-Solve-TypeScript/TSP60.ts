/*
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator. The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2. 
Input: dividend = 10, divisor = 3	Output: 3  
Input: dividend = 7, divisor = -3		Output: -2
*/
let c1:number = 15;
let c2:number = 7;
let op2 = (n1:number, n2:number):number => {
    let ans:number = Number(n1) / Number(n2);
    if(ans > Number(2 ** 31) - Number(1)) ans = Number(2 ** 31) - Number(1);
    if(ans < Number((-2) ** 31)) ans = Number((-2) ** 31);
    return Number(ans);
}
console.log(op2(c1, c2));