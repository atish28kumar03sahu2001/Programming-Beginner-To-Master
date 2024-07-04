//CallBack Function
let demo1 = (name:string, callback:Function): void  => {
    console.log(name);
    callback("Name2");
}
let demo2 = (name: string): void => {
    console.log(name);
}
demo1("Name1",demo2);

let demo3 = (name:string, callback:Function): void => {
    console.log(name);
    callback();
}
let demo4 = (name: string, callback:Function) => {
    console.log(name);
    callback("Name5");
}
let demo5 = (name:string): void => {
    console.log(name);
}
demo3("Name3", ():void=>demo4("Name4", demo5) );

//CallbackHell
setTimeout(():void=>{
    console.log("Time1");
    setTimeout(():void => {
        console.log("Time2");
        setTimeout((): void => {
            console.log("Time3");
            setTimeout(()=>{
                console.log("Time4");
            },4000)
        },3000)
    },2000)
},1000);

//Self-Executing Function / Immediate Invoked Function
(function():void {
    console.log("Self-Executing Function");
})();

const result = (function(a:number, b:number): number {
    return a * b;
})(15, 45)
console.log(result);

//Closure In Function
let demo6 = (): Function => {
    let outer: string = "Outer Function";
    let demo7 = (): void => {
        console.log(outer);
    }
    return demo7;
}
let op1 = demo6();
op1();

let demo8 = (d8:number): Function => {
    let op2 = d8 * 100;
    let demo9 = (s8: number): void => {
        console.log(op2 + s8);
    }
    return demo9;
}
let op3 = demo8(12);
op3(50);