class Shape {
    constructor(color){
        this.color = color;
    }
    CalcArea(){
        throw new Error("You have to implement the method");
    }
    describe() {
        console.log(`This Is A ${this.color} shape`);
    }
}
class Square extends Shape {
    constructor(color, sidelength) {
        super(color);
        this.sidelength = sidelength;
    }
    CalcArea(){
        return this.sidelength * this.sidelength;
    }
}

let square = new Square('blue',4);
square.describe();
console.log(`Area Of Square : ${square.CalcArea()}`);