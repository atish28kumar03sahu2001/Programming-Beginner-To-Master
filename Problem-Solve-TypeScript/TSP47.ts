/*HCM & LCM of Two Number*/
let val1:number = 15;
let val2:number = 20;
let a:number = val1, b:number = val2, t:number, HCF:number, LCM:number;
while(b !== 0) {
    t = b;
    b = a % b;
    a = t;
}
HCF = a;
LCM = (val1 * val2) / HCF;
console.log(`LCM : ${LCM}`);
console.log(`HCF : ${HCF}`);