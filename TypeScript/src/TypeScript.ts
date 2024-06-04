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

//REST OPERATOR
type FuncAr = (m: number[]) => number[];
const funca1: FuncAr = (m) => {
    return m;
}
console.log(funca1([1,2,3,4,5,6,7]));

const funca2 = (...m:number[])=>{
    return m;
}
console.log(funca2(1,2,3,4,5,6,7,8,9,10));

type FuncAr1 = (...m:number[])=>number[];
const funca3:FuncAr1 = (...m) => {
    return m;
}
console.log(funca3(10,20,30,40,50,60,70,80,90,100));

function OFUN (n: number): number {
    return 45;
}

type OF1 = (...n: number[]) => number; 
const lol: OF1 = function OFUN1 (n) {
    return n;
}

//Function With Objects
// interface productType {
//     name:string, 
//     stock:number, 
//     price:number, 
//     photo:string
// }
type productType = {
    name:string, 
    stock:number, 
    price:number, 
    photo:string
    readonly id:string
}
type GetDataType = (product:productType) => void

const getData: GetDataType = (product) => {
    console.log(product);
    // product.id = "ASASAS" //It will show error because of readonly
}
const product1: productType  = {
    id: "01",
    name:"Laptop", 
    stock: 50, 
    price: 100000, 
    photo:"SamplePhotoURL"
}
getData(product1);

//Never Type
type themeMode = "Light" | "dark";
// const mode: themeMode = "ABCD"; // it will show error;
const mode1: themeMode = "dark";

const errorH = (): never => {
    throw new Error();
}

//Classes In TypeScript
class Player {
    public hight;  //by default public but you can add public keyword
    private weight;


    constructor (hight:number, weight:number) {
        this.hight = hight;
        this.weight = weight;
    }
    myWeight = () => {
        return this.weight;
    }
}
const player1 = new Player(150, 185);
console.log(`player1 : ${player1.hight}, ${player1.myWeight()}`);

class Player1 {
    public readonly id:string;
    constructor (
        private hight: number, 
        public weight: number, 
        protected power: number
    ) {
        this.id = String(Math.random() * 1000);
    }
    myHight = () => this.hight;

}
const pmaks1 = new Player1(200, 200, 500);
console.log(`Maks : ${pmaks1.myHight()}, ${pmaks1.weight}`);

class plater extends Player1 {
    special: boolean;
    constructor (
        hight: number, 
        weight: number, 
        power: number, 
        special: boolean
    ) {
        super(hight, weight, power)
        this.special = special;
        // this.id = 123 //it will show error because of readonly
    }
    getPower = () => this.power;
}
const Voidp = new plater(110,100,500,true);
console.log(`Voidp: ${Voidp.id}, ${Voidp.myHight()}, ${Voidp.weight}, ${Voidp.special}, ${Voidp.getPower()}`);