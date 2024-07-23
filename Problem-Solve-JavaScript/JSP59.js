/*Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values. Input: n = 5 Output: true Explain: The binary representation of 5 is: 101*/
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter a number: "));
const output = (n) => {
    let prev = n % 2;
    n = Math.floor(n/2);
    while(n > 0){
        let cur = n % 2;
        if(cur === prev)    return false;
        prev = cur;
        n = Math.floor(n/2);
    }
    return true;
}
console.log(output(n));