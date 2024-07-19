/*Write a program to return the reverse of a number n = 123 output = 321*/
let num1:number = 123;
let rev: number = 0;
while(num1 !== 0){
    let rem = num1 % 10;
    rev = (rev * 10) + rem;
    n = Math.floor(num1 / 10);
}
console.log(rev);