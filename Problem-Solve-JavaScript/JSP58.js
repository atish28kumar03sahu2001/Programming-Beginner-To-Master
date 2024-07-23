/*
Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
Input: n = 00000000000000000000000000001011 decimal = 11		Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
Input: n = 00000000000000000000000010000000 decimal = 128		Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
*/
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter Input : "));

let output = (n) => {
    let binary = n.toString(2);
    let count = 0;
    for(let i = 0; i < binary.length; i++){
        if(binary.charAt(i) === '1'){
            count++;
        }
    }
    return count;
}
console.log(output(n));