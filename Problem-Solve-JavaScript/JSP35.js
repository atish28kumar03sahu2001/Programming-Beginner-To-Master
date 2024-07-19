/*Write a program to print all the numbers from 1 to n .If m is present in between the sequence then stop printing any other number and break out of the loop.*/
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter Num : "));
let m = parseInt(prompt("Enter Range : "));
for(let i = 1; i <= n; i++){
    if(i === m) break;
    console.log(i);
}