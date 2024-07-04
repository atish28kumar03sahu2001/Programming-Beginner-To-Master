//Higher Order Function
function greet(name: string, formatter: Function): Function {
    return formatter(name);
}
function simplegreet(name:string):string {
    return `Hello ${name}`;
}
console.log(greet("Maks Void",simplegreet));

//First Order Function
function add(a:number,b:number): number {
    return a + b;
}
let res = add(50, 40);
console.log(res);

//Variadic Function
function func(...args: number[]): number[] {
    let res = [];
    for(let i = 0; i < args.length; i++){
        res.push(args[i]);
    }
    return res;
}
console.log(func(1, 2, 3, 4, 5, 6, 7, 8, 9));

//Pure Function
let count:number = 0;
function increment():number{
    count += 1;
    return count;
}
console.log(increment());
console.log(increment());

//Impure Function
function getRandom(): number {
    return Math.random();
}
console.log(getRandom());
console.log(getRandom());