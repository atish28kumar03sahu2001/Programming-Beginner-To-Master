//Method Overloading
class Calculator {
    add(a, b){
        if(typeof a === 'number' && typeof b === 'number'){
            return a + b;
        } else if (Array.isArray(a) && Array.isArray(b)){
            return a.map((num, index) => num + (b[index] || 0));
        } else {
            throw new Error("Invalid Argument");
        }
    }
}
let Calc = new Calculator();
console.log(Calc.add(5,6));
console.log(Calc.add([1,2,3], [4,5,6]));