/*Swapping Of Two Number Without Using Third Variable*/
let val3 = parseInt(prompt("Enter Num1 Value : ")||"0",10);
let val4 = parseInt(prompt("Prompt Num2 Value : ")||"0",10);
console.log(`num1: ${val3} , num2: ${val4}`);
val3 += val4;
val4 = val3 - val4;
val3 -= val4;
console.log(`num1: ${val3} , num2: ${val4}`);
val4 += val3;
val3 = val4 - val3;
val4 -= val3;
console.log(`num1: ${val3} , num2: ${val4}`);