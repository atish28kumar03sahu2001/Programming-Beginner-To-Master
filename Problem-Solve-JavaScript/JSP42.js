/*prime number*/
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter Num : "));
let flag = true;
if(num <= 1){
    flag = false;
} else {
    for(let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0)  {
            flag = false;
            break;
        }
    }
}
if(flag)    console.log("Prime Number");
else    console.log("Not Prime Number");