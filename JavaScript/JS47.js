//Implicit Type Conversion
let res = '5' + 2;
console.log(`${res} -- ${typeof res}`);

let res1 = '5' * 2;
console.llog(`${res1} -- ${typeof res1}`);

//Explicit Type Conversion (Type Casting)
let num = 123;
let str = String(num);
console.log(str);
console.log(num.toString());

let str1 = '123'
let num1 = Number(str1);
console.log(num1);
console.log(num1 += str1);

let str2 = "hello";
let bol1 = Boolean(str2);
console.log(bol1);

/*
Falsy Values = false, 0, -0, 0n, ""(Empty String), null, undefined, NaN
Truthy Value: Everything Else, including all objects and non-zero numbers.
*/