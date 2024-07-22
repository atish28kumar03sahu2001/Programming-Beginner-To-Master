/*HCM & LCM Of Two Number*/
const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("Enter Num1 : "));
let num2 = parseInt(prompt("Enter NUm2 : "));
let a = num1, b = num2, t, HCF, LCM;
while(b !== 0){
    t = b;
    b = a % b;
    a = t;
}
HCF = a;
LCM = (num1 * num2) / HCF;
console.log(`LCM : ${LCM}`);
console.log(`HCF : ${HCF}`);