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

/**************************************************************************************/

class Player1 {
    public readonly id:string; //you can't change the value of id
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

/**************************************************************************************/

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