//Arrow Function
let func1 = () => {
    console.log("This Is An Arrow Function");
}
func1();

let func2 = () => console.log("This Is An Arrow Function");
func2();

let func3 = (a, b) => a * b;
console.log(func3(10, 20));

let func4 = (num) => {
    return num * 100;
}
console.log(func4(50));