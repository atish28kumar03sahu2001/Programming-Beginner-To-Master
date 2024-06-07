"use strict";
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
