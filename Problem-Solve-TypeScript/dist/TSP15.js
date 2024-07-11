"use strict";
/*Fibonacci Series*/
let range3 = parseInt(prompt("Enter Range Value : ") || "0", 10);
let n1 = 0;
let n2 = 1;
for (let i = 0; i < range3; i++) {
    console.log(n1);
    let temp = n1 + n2;
    n1 = n2;
    n2 = temp;
}
