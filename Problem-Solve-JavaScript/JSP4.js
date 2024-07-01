/*
Input: The input consists of a single integer, `n` (-10^9 ≤ n ≤ 10^9), representing the mystical number.
Output: Your mission is to output a message declaring whether the given number is "Even" or "Odd" based on the magical rules set by Arithmos.
Input: 14
Output: Even
*/
function checkMagicalEnergy(n) {
    if (n % 2 == 0) console.log("Even");
    else console.log("Odd");
}
checkMagicalEnergy(14);

function isEven(n) {
    return !(n & 1);
}
console.log(isEven(20));
function isOdd(n) {
    return !!(n & 1);
}
console.log(isOdd(29));