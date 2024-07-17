/*Write a program to print the digits of a number. N = 153 Output = 3 5 1*/
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter Num : "));
while(num != 0){
    let rem = num % 10;
    console.log(rem);
    num = Math.floor(num / 10);
}