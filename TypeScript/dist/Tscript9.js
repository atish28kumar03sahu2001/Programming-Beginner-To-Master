"use strict";
class Product1 {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id = String(Math.random() * 1000);
        this.getId = () => this.id;
    }
}
const user1 = new Product1("Laptop", 15000, 50);
console.log(`user1 : ${user1.getId()}, ${user1.name}, ${user1.price}, ${user1.stock}`);
