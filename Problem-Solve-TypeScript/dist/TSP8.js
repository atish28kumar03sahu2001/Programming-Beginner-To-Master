"use strict";
/*Print Even & Odd Number From 1 to N*/
let range = parseInt(prompt("Enter Range Value : ") || "0", 10);
let Even = (r) => {
    for (let i = 1; i <= range; i++) {
        if (i % 2 === 0) {
            console.log(`${i}`);
        }
    }
};
Even(range);
let Odd = (r) => {
    for (let i = 1; i <= range; i++) {
        if (i % 2 !== 0) {
            console.log(`${i}`);
        }
    }
};
Odd(range);
