"use strict";
//TypeScript Function
function func1() {
    let num1 = 18;
    let num2 = 25;
    console.log(num1 + num2);
}
func1();
/******************************************************************************/
function func2(num1, num2) {
    return num1 * num2;
}
console.log(func2(30, 40));
/******************************************************************************/
let func3 = () => {
    let num3 = "abcd";
    let num4 = "efgh";
    return num3 + num4;
};
console.log(func3());
/******************************************************************************/
let func4 = (num1, num2) => {
    console.log(`num1: ${num1} , num2: ${num2}`);
};
func4("mnop", 12453);
let func5 = (name, age) => {
    return name + age;
};
console.log(func5("name1", 25));
let func6 = function (name, email) {
    return String(name + email);
};
console.log(func6("Name1", "Name1@mail.com"));
let func7 = (n, m, l) => {
    if (typeof l === "undefined")
        return m * n;
    else
        return n * m * l;
};
console.log(func7(20, 50));
console.log(func7(20, 30, 60));
let func8 = (a, b, c = 20) => {
    return a * b * c;
};
console.log(func8(12, 22));
console.log(func8(10, 20, 30));
