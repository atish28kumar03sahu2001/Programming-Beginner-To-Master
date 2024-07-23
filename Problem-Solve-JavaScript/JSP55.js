/*You are given q queries in the form of a, b, and n for each query, print the series corresponding to the given a, b, and n values as a single line of n space-separated integers.*/
const prompt = require("prompt-sync")();
let q = parseInt(prompt("Enter Range : "));
for(let i = 0; i < q; i++)  {
    let a = parseInt(prompt());
    let b = parseInt(prompt());
    let c = parseInt(prompt());
    for(let j = 0; j < c; j++){
        a + b * Math.pow(2, j);
        console.log(a+" ");
    }
    console.log();
}