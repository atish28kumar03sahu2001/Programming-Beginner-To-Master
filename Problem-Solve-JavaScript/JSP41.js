/*Strong Number*/
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter Num : "));
let temp = 1, N = n, count = 0;
while(n !== 0){
    let rem = n % 10;
    for(let i = 1; i <= rem; i++){
        temp *= i;
    }
    count += temp;
    temp = 1;
    n = Math.floor(n / 10);
}
if(N === count) console.log("Number Is Strong Number");
else console.log("Number Is Not Strong Number");