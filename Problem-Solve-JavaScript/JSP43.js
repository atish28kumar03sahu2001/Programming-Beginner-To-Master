/*Prime Number From 1 To N*/
const prompt = require("prompt-sync")();
let r = parseInt(prompt("Enter Range : "));
for(let i = 1; i <= r; i++) {
    let flag = true;
    if(i <= 1){
        flag = false;
    } else {
        for(let j = 2; j <= Math.sqrt(i); j++){
            if(i % j === 0){
                flag = false;
                break;
            }
        }
    }
    if(flag)    console.log(i);
}