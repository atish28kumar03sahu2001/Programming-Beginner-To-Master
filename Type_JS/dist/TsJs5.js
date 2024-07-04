"use strict";
//Break & Continue
for (let i = 5; i <= 15; i++) {
    if (i === 10) {
        break;
    }
    console.log(i);
}
for (let j = 15; j <= 25; j++) {
    if (j === 20) {
        continue;
    }
    console.log(j);
}
//Type Conversion
let num1 = 1234567890;
console.log(String(num1));
let str1 = '123456';
console.log(Number(str1));
let str2 = "true";
console.log(Boolean(str2));
