//Different Types In TypeScript
let v1: number = 1234567890;
console.log(`v1 : ${v1}`);

let v2:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(`v2 : ${v2}`);

let v3:boolean = false;
console.log(`v3: ${v3}`);

let v4 = <number> 9876543210;
console.log(`v4: ${v4}`);

let v5 = <string> "MAKS VOID";
console.log(`v5: ${v5}`);

let v6 = <boolean> true;
console.log(`v6: ${v6}`);

let v7 = "ABCD";
console.log(`v7: ${v7}`);

let v8: any = true;
console.log(`v8: ${v8}`);

let v9: string | number | boolean;
v9 = "VOID";
console.log(`v9: ${v9}`);
v9 = 9999;
console.log(`v9: ${v9}`);
v9 = false;
console.log(`v9: ${v9}`);

let v10 = <number | string | boolean> 10;
console.log(`v10: ${v10}`);
v10 = "abcdef";
console.log(`v10: ${v10}`);
v10 = false;
console.log(`v10: ${v10}`);

type val1 = {prop1: number}
type val2 = {prop2: string}
type val12 = val1 & val2;
const example: val12 = {
    prop1: 15,
    prop2: "name",
}
console.log(example);