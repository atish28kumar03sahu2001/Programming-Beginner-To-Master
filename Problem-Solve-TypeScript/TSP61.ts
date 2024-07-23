/*You have numCoconuts coconut shells that are initially full of water. You can exchange numExchange empty coconut shells from the market with one full coconut shell of water. The operation of drinking a full of water turns it into an empty coconut shell. Given the two integers numCoconuts and numExchange return the maximum number of coconut shells of water you can drink. Input: numCoconuts = 9	numExchange = 3	output: 13*/
let h1:number = 9;
let h2:number = 3;
const func1 = (n1:number, n2:number):number => {
    let total:number = n1, empty:number = n1;
    while(empty >= n2) {
        let temp:number = empty / n2;
        total += temp;
        empty = temp + empty % n2;
    }
    return total;
}
console.log(func1(h1, h2));