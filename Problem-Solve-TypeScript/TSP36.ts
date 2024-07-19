/*Sum Of All Odd & Even Number From 1 to N*/
let range:number = 20;
let co1:number = 0, co2:number = 0;
for(let i:number = 1; i <= range; i++){
    if(i % 2 === 0) co1 += i;
    else co2 += i;
}
console.log(`Even: ${co1} Odd: ${co2}`);