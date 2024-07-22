/*Palindrome Number 121 === 121*/
let num5: number = 141;
let NUM1:number = num5, count3:number = 0;
while(num5 !== 0) {
    let rem:number = num5 % 10;
    count3 = (count3 * 10) + rem;
    num5 = Math.floor(num5 / 10);
}
if(NUM1 === count3) console.log(`${NUM1} is palindrome number`);
else console.log(`${NUM1} is not palindrome number`);