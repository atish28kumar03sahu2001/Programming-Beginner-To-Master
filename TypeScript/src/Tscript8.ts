//Getter & Setter Function In TypeScript
class Player2 {
    public readonly id:string;
    constructor (
        private hight: number, 
        public weight: number, 
        protected power: number
    ) {
        this.id = String(Math.random() * 1000);
    }
    get myHight(): number {
        return this.hight;
    }
    set ChangeHight(val: number) {
        this.hight = val;
    }
}
const AKS = new Player2(15,30,45);
console.log(`AKS : ${AKS.id}, ${AKS.myHight}, ${AKS.weight}`);

const SKS = new Player2(50,100,150);
console.log(`SKS : ${SKS.id}, ${SKS.myHight}, ${SKS.weight}`);
SKS.ChangeHight = 200;
console.log(`SKS : ${SKS.id}, ${SKS.myHight}, ${SKS.weight}`);