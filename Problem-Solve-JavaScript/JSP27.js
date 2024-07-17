/*Write a program using only while loops to print all the even numbers from 1 to n*/
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter Num : "));
let i = 1;
while(i <= num) {
    if(i % 2 === 0) console.log(i);
    i++;
}