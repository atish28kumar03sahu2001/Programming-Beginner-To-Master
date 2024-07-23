/*You have numCoconuts coconut shells that are initially full of water. You can exchange numExchange empty coconut shells from the market with one full coconut shell of water. The operation of drinking a full of water turns it into an empty coconut shell. Given the two integers numCoconuts and numExchange return the maximum number of coconut shells of water you can drink. Input: numCoconuts = 9	numExchange = 3	output: 13*/
const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("Enter Num1 : "));
let num2 = parseInt(prompt("Enter Num2 : "));
const func = (n1, n2) => {
    let total = n1, empty = n1;
    while(empty >= n2){
        let temp = empty / n2;
        total += temp;
        empty = temp + empty % n2;
    }
    return total;
}
console.log(func(num1, num2));