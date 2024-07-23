/*
Input: Every line of input will contain a string followed by an integer. Each string will have a maximum of 10 alphabetic characters and each integer will be in the inclusive range from 0 to 999.
Output: In each line of output there should be two columns. The first column contain the string and left justified using exactly 15 characters. The second column contain the integer, expressed in exactly 3 digits. If the original input has less than 3 digit you must add your output leading digits with zeroes.
*/
const prompt = require("prompt-sync")();
let r = parseInt(prompt("Enter Range : "));
for(let i = 1; i <= r; i++) {
    let s1 = prompt("Enter String : ");
    let x = parseInt(prompt("Enter Number : "));
    let s2 = s1;
    let temp = x.toString();
    for(let j = s1.length; j <= 14; j++){
        s2 += " ";
    }
    if(temp.length === 3)   console.log(s2 + temp);
    else if (temp.length === 2) console.log(s2 + "0" + temp);
    else if(temp.length === 1)  console.log(s2 + "00" + temp);
}