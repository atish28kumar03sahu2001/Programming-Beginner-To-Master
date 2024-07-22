/*Palindrome Number: 121 === 121*/
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter Number : "));
let NUM = num, count = 0;
while(num !== 0){
    let rem = num % 10;
    count = (count * 10) + rem;
    num = Math.floor(num / 10);
}
if(NUM === count)   console.log(`${NUM} Is Pallindrome Number`);
else console.log(`${NUM} Is Not Pallindrome Number`);