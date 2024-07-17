/*Print the following series using while loop 1 4 9 16 25 36 …. n*/
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter Range : "));
let i = 1;
while(i <= n){
    let res = i * i;
    if(res > n) break;
    console.log(res);
    i++;
}