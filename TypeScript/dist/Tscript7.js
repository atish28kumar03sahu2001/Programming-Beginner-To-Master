"use strict";
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
/**************************************************************************************/
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
/**************************************************************************************/
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
