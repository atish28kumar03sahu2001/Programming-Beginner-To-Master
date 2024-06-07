//Rest Operator
type FuncAr = (m: number[]) => number[];
const funca1: FuncAr = (m) => {
    return m;
}
console.log(funca1([1,2,3,4,5,6,7,8,9,0]));

const funca2 = (...ar: number[]) => {
    return ar;
}
console.log(funca2(9,8,7,6,5,4,3,2,1,0));

type FuncAr1 = (...ar1:number[]) => number[];
const funca3: FuncAr1 = (...array0) => {
    return array0;
}
console.log(funca3(10,20,30,40,50,60));

type OF1 = (...n: number[]) => number[];
const lol: OF1 = function OFUN1 (...n: number[]): number[] {
    return n;
}
console.log(lol(100,200,300,400));