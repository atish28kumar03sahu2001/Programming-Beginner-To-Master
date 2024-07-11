/*Fibonacci Series*/
let range3 = parseInt(prompt("Enter Range Value : ")||"0",10);
let n1:number = 0;
let n2:number = 1;
for(let i:number = 0; i < range3; i++) {
    console.log(n1);
    let temp: number = n1 + n2;
    n1 = n2;
    n2 = temp;
}