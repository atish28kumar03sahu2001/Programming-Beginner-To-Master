/*Sum Of Digit Of A Number*/
let num3:number = 1234567890;
let count1:number = 0;
while(num3 !== 0) {
    let rem:number = num3 % 10;
    count1 += rem;
    num3 = Math.floor(num3 / 10);
}
console.log(`Sum Of Digit : ${count1}`);