/*
In a premier championship series of sports car racing initially the 1st car is ahead of the 2nd car by x meters. After that in every second the 1st car moves ahead by n1 meter and the 2nd car moves ahead n2 meter (in the same direction). the task is to print the number of seconds after which the 2nd car crosses the 1st car. if it is impossible to do so, then print -1.
Input:				Input:
3	value of n1		5	Value of n1
4	value of n2		4	Value of n2
1	value of X		1	Value of X
Output: 2				Output: -1
*/

let val1:number = 123;
let val2:number = 456;
let x:number = 50;
if(val2 <= val1) console.log(-1);
else {
    let time:number = Math.floor(x / (num2 - num1));
    console.log(time + 1);
}