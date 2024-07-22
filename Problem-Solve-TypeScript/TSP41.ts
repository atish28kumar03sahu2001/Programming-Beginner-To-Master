/*Strong Number */
let num1:number = 12345;
let temp:number = 1, N:number = num1, count:number = 0;
while(N !== 0) {
    let rem:number = N % 10;
    for(let i:number = 1; i <= rem; i++) {
        temp *= i;
    } 
    count += temp;
    temp = 1;
    N = Math.floor(N / 10);
}
if(N === count) console.log(`${N} is strong number`);
else console.log(`${N} is not strong number`);