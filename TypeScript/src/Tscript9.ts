//INTERFACE TRICKS & TIPS
interface ProductType {
    name:string;    price:number;
    stock: number;  
    offer?:boolean
}
interface GiveId {
    getId: () => string;
}
class Product1 implements ProductType, GiveId {
    private id: string = String(Math.random() * 1000);
    constructor(
        public name: string,
        public price: number,
        public stock: number,
    ){}
    getId = () => this.id;
}
const user1 = new Product1("Laptop", 15000, 50);
console.log(`user1 : ${user1.getId()}, ${user1.name}, ${user1.price}, ${user1.stock}`);