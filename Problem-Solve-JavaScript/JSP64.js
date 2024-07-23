/*You have a collection of n cards, each of which has a number written on it. There are k cards with odd numbers, and the rest are even numbers. Your goal is to divide these cards into chunks in such a way that the sum of numbers in each chunk is odd, and each chunk contains more than one card. You need to determine the maximum number of chunks that can be created under these constraints.
Input: 6 5 	Output: 2	Input: 13	888	Output: -288
*/
const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("Enter Num1 : "));
let num2 = parseInt(prompt("Enter Num2 : "));
const func = (n1, n2) => {
    let even = n1 - n2;
    let count = 0;
    if(n2 === 0){
        return 0;
    }
    if(n2 > even){
        let temp = n2;
        count += even;
        temp -= even;
        temp = parseInt(Math.floor(temp/3));
        count += temp;
    } else {
        count += n2;
    }
    return count;
}
console.log(func(num1, num2));