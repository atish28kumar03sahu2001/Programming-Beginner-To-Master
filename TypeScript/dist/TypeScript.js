"use strict";
let v1 = 2500;
console.log(v1);
let v2 = "MAKS VOID";
console.log(v2);
let v3 = "VOID MAKS";
let v4 = 152364789;
let v5 = false;
let v6; //`any` if you don't give any datatype
let v7;
let v8 = "Deva";
//union variable
let surname;
let func1 = (a1, a2) => {
    console.log(a1, a2);
};
func1(15, "22");
let func2 = (a1, a2) => {
    console.log(a1, a2);
};
func2(10, 20);
let func3 = (a1, a2) => {
    return a1 * a2;
};
console.log(func3(10, 50));
let a = 30;
console.log(a);
let b = "ABCD";
console.log(b);
let func4 = (v1, v2) => {
    return v1 * v2;
};
console.log(func4(50, 35));
//TypeScript Array
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = ['a', 'd', 'f', 'e'];
const arr3 = ["a", "v", "l", "r", "t"];
const arr4 = new Array(10);
const arr5 = [1, "a", 2, "b", 3, "c"];
const arr6 = ["a", "A", "b", "B", "c", "C", "d", "D"];
arr6.forEach(i => {
    console.log(i.toUpperCase());
});
//Tupple Example
let arr7 = [12, "A", 15, "B"];
const OBJ1 = {
    height: 5.5,
    weight: 88,
    gender: false
};
console.log(OBJ1);
const OBJ2 = {
    height: 5.5,
    weight: 88,
};
console.log(OBJ2);
const OBJ3 = {
    name: "MAKS VOID",
    age: 25,
};
console.log(OBJ3);
const OBJ4 = {
    name: "VOID MAKS1",
    age: 24,
    gender: false
};
console.log(OBJ4);
const func5 = (n, m, l) => {
    if (typeof l === "undefined")
        return n * m;
    else
        return n * m * l;
};
console.log(func5(10, 50));
console.log(func5(50, 60, 70));
const func6 = (a, b, c = 25) => {
    return a * b * c;
};
console.log(func6(12, 18));
console.log(func6(10, 60, 90));
const funca1 = (m) => {
    return m;
};
console.log(funca1([1, 2, 3, 4, 5, 6, 7]));
const funca2 = (...m) => {
    return m;
};
console.log(funca2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
const funca3 = (...m) => {
    return m;
};
console.log(funca3(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));
function OFUN(n) {
    return 45;
}
const lol = function OFUN1(n) {
    return n;
};
const getData = (product) => {
    console.log(product);
    // product.id = "ASASAS" //It will show error because of readonly
};
const product1 = {
    id: "01",
    name: "Laptop",
    stock: 50,
    price: 100000,
    photo: "SamplePhotoURL"
};
getData(product1);
// const mode: themeMode = "ABCD"; // it will show error;
const mode1 = "dark";
const errorH = () => {
    throw new Error();
};
//Classes In TypeScript
class Player {
    constructor(hight, weight) {
        this.myWeight = () => {
            return this.weight;
        };
        this.hight = hight;
        this.weight = weight;
    }
}
const player1 = new Player(150, 185);
console.log(`player1 : ${player1.hight}, ${player1.myWeight()}`);
class Player1 {
    constructor(hight, weight, power) {
        this.hight = hight;
        this.weight = weight;
        this.power = power;
        this.myHight = () => this.hight;
        this.id = String(Math.random() * 1000);
    }
}
const pmaks1 = new Player1(200, 200, 500);
console.log(`Maks : ${pmaks1.myHight()}, ${pmaks1.weight}`);
class plater extends Player1 {
    constructor(hight, weight, power, special) {
        super(hight, weight, power);
        this.getPower = () => this.power;
        this.special = special;
        // this.id = 123 //it will show error because of readonly
    }
}
const Voidp = new plater(110, 100, 500, true);
console.log(`Voidp: ${Voidp.id}, ${Voidp.myHight()}, ${Voidp.weight}, ${Voidp.special}, ${Voidp.getPower()}`);
//Getter & Setter Function In TypeScript
class Player2 {
    constructor(hight, weight, power) {
        this.hight = hight;
        this.weight = weight;
        this.power = power;
        this.id = String(Math.random() * 1000);
    }
    get myHight() {
        return this.hight;
    }
    set ChangeHight(val) {
        this.hight = val;
    }
}
const AKS = new Player2(15, 30, 45);
console.log(`AKS : ${AKS.id}, ${AKS.myHight}, ${AKS.weight}`);
const SKS = new Player2(50, 100, 150);
console.log(`SKS : ${SKS.id}, ${SKS.myHight}, ${SKS.weight}`);
SKS.ChangeHight = 200;
console.log(`SKS : ${SKS.id}, ${SKS.myHight}, ${SKS.weight}`);
