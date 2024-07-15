/*Print all odd numbers between 1 to N using any loop.*/
let num3 = parseInt(prompt("Enter Range Value : ")||"0",10);
for(let i:number = 1; i <= num3; i++){
    if(i % 2 !== 0) console.log(i);
}