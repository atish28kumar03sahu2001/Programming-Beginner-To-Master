//TypeScript Function
function func1 () {
    let num1: number = 18;
    let num2 = <number> 25;
    console.log(num1 + num2);
}
func1();
/******************************************************************************/
function func2 (num1: number, num2: number) : number {
    return num1 * num2;
}
console.log(func2(30, 40));
/******************************************************************************/
let func3 = () : string => {
    let num3 = <string> "abcd";
    let num4 = <string> "efgh";
    return num3 + num4;
}
console.log(func3());
/******************************************************************************/
let func4 = (num1: string, num2: number) => {
    console.log(`num1: ${num1} , num2: ${num2}`);
}
func4("mnop",12453);
/******************************************************************************/
type UserName = (str1: string, num1: number)  => string;
let func5: UserName = (name, age) => {
    return name + age;
}
console.log(func5("name1",25));
/******************************************************************************/
type UserName1 = (str1: string, str2: string) => string;
let func6: UserName1 = function (name:string, email:string): string {
    return String(name + email);
}
console.log(func6("Name1","Name1@mail.com"));
/******************************************************************************/

type FuncType = (n: number, m: number, l?: number) => number;
let func7: FuncType = (n,m,l) => {
    if(typeof l === "undefined") return m * n;
    else return n * m * l;
}
console.log(func7(20, 50));
console.log(func7(20, 30, 60));

/******************************************************************************/

type FuncType1 = (a: number, b: number, c?: number) => number;
let func8: FuncType1 = (a, b, c = 20): number => {
    return a * b * c;
}
console.log(func8(12, 22));
console.log(func8(10, 20, 30));