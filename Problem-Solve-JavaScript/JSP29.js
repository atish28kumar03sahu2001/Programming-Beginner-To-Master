/*By using while loop and continue statement Print all number from 1 to n but then it should not be divisible by 5*/
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter Range : "));
let i = 1;
while(i <= n){
    if(i % 5 === 0){
        i++;
        continue;
    }
    console.log(i);
    i++;
}