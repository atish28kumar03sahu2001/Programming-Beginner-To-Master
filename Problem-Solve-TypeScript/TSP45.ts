/*Reverse Number */
let num4:number = 123456789;
let count2:number = 0;
while(num4 !== 0) {
    let rem:number = num4 % 10;
    count2 = (count2 * 10) + rem;
    num4 = Math.floor(num4 / 10);
}
console.log(`The Reversed Number Is : ${count2}`);