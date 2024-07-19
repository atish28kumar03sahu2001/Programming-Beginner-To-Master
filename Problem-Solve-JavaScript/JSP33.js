/*Print the following series using for loop:- 1,8,27,64,125,216,......n*/
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter Num : "));
for(let i = 1; i*i*i <= n; i++){
    console.log(i*i*i);
}