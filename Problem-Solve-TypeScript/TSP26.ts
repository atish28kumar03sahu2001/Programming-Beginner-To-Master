/*Compute the factorial of a given number using a loop.*/
let num7 = parseInt(prompt("Enter Integer Value : ")||"0",10);
let fact:number = 1;
for(let i:number = 1; i <= num7; i++){
    fact *= i;
}
console.log(fact);