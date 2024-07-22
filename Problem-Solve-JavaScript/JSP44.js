/*Sum Of Digit Of A Number*/
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter Num : "));
let count = 0;
while(num !== 0){
    let rem = num % 10;
    count += rem;
    num = Math.floor(num / 10);
}
console.log(`Sum Of Digit : ${count}`);