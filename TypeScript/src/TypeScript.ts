let v1 = 2500;
console.log(v1);

let v2 = "MAKS VOID";
console.log(v2);

let v3: string = "VOID MAKS";
let v4:number = 152364789;
let v5:boolean = false;
let v6; //`any` if you don't give any datatype
let v7:any;

let v8 = <string>"Deva";

//union variable
let surname:string|number;

let func1 = (a1:number, a2:string) => {
    console.log(a1, a2);
}
func1(15, "22");

let func2 = (a1:number, a2:number) => {
    console.log(a1, a2);
}
func2(10,20);

let func3 = (a1: number, a2: number): number => {
    return a1 * a2;
}
console.log(func3(10, 50));

type UserName1 = string | number;
let a:UserName1 = 30;   console.log(a);
let b:UserName1 = "ABCD";   console.log(b);
// let c:UserName1 = false; //error

type UserName = (n: number , m: number) => number;
let func4: UserName = (v1, v2) => {
    return v1 * v2;
}
console.log(func4(50, 35));

//TypeScript Array
const arr1: number[] = [1,2,3,4,5,6];
const arr2: string[] = ['a','d','f','e'];
const arr3:Array<String> = ["a","v","l","r","t"];
const arr4: Array<number> = new Array(10);
const arr5: Array<string | number> = [1,"a",2,"b",3,"c"];

const arr6: Array<string> = ["a","A","b","B","c","C","d","D"];
arr6.forEach(i => {
    console.log(i.toUpperCase());
})

//Tupple Example
let arr7: [number, string, number, string] = [12,"A",15,"B"];