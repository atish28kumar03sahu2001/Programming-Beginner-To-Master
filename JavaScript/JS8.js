val1 = 10;
console.log(val1); //10

val2 = 20;
console.log(val2); //20
var val2;

val3 = 30;
var val3;
console.log(val3); //30

console.log(val5); //undefined
var val5 = 50;

console.log(val4); //Reference Error: val4 is not defined
val4 = 40;

val6 = 60;
console.log(val6); //Reference Error: Cannot access 'val6' before initialization
let val6;

val7 = 70;
console.log(val7); //SyntaxError: Missing initializer in const declaration
const val7;