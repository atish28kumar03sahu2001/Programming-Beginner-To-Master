/*there are three line of output the first contain an integer, second contain a double, third contain a string. the output must be first line print string, second line print double, third line print int.*/
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter Num : "));
let d = parseFloat(prompt("Enter Double : "));
let s = prompt("Enter String : ");
console.log(s);
console.log(d);
console.log(num);