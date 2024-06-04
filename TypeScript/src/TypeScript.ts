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

//Objects In TypeScript
type OBJ = {
    height: number;
    weight: number; 
    gender?: boolean; //optional property
}
const OBJ1:OBJ = {
    height: 5.5,
    weight: 88,
    gender: false
}
console.log(OBJ1);
const OBJ2:OBJ = {
    height: 5.5,
    weight: 88,
}
console.log(OBJ2);
/**************************************************/
interface OBJJ {
    name: string;
    age: number;
    gender?: boolean;
}
const OBJ3:OBJJ = {
    name: "MAKS VOID",
    age: 25,
}
console.log(OBJ3);

interface newObjj extends OBJJ {
    /*here we can add new property which will merge with the OBJJ*/
    scolar?:boolean;
    func?:() => void;
}
const OBJ4: newObjj = {
    name: "VOID MAKS1",
    age: 24,
    gender: false
}
console.log(OBJ4);

//Function In JavaScript
type funcType = (n: number, m: number, l?: number) => number;
const func5: funcType = (n, m, l) => {
    if(typeof l === "undefined")    return n * m;
    else return n * m * l;
}
console.log(func5(10, 50));
console.log(func5(50, 60, 70));

type funcType1 = (n: number, m: number, l?: number) => number;
const func6:funcType1 = (a, b, c = 25): number => {
    return a * b * c;
}
console.log(func6(12, 18));
console.log(func6(10,60,90));

