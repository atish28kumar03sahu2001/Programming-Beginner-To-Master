/*there are many needy people who need some money are standing in a row. the person who stands at ith position need i * i rs money. you have X rs. and you want to fulfil the needs of people. when you donate the money to any people it is deducted from x. you have to find how many peoples can fulfil their needs by your money.
input: 14	output: 3		input: 35	output: 4
*/
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter a number : "));
const func = (n) => {
    if(n <= 0)  return 0;
    let count = 0, i = 1;
    while(n >= i * i){
        n -= i * i;
        count++;
        i++;
    }
    return count;
}
console.log(func(num));