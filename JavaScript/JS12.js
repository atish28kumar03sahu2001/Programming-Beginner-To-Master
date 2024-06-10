//Static Variable
class Example {
    static num1 = 100;
}
console.log(`num1 : ${Example.num1}`);
class Example1 {
    static num2 = 1000;
    static func1 = () => {
        return `num2 : ${this.num2}`;
    }
}
console.log(Example1.func1());