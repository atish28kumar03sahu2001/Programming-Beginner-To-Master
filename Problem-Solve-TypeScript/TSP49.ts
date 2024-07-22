/*Perfect Number */
let val4:number = 123456;
let count4:number = 0;
for(let i:number = 1; i < val4; i++){
    if(val4 % i === 0) count4 += i;
}
if(count4 === val4) console.log(`Perfect Number`);
else console.log(`Not A Perfect Number`); 