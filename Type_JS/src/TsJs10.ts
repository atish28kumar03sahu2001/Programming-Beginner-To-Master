//Function
function demo11 (): void {
    console.log("Demo1 Function");
}
demo11();

function demo22 (): number {
    return 20 + 50;
}
console.log(demo22());

//Arrow Function
let demo33 = (): void => {
    console.log("Arrow Demo Function");
}
demo33();

let demo44 = (a: number, b: number): number => {
    return a * b;
}
console.log(demo44(50, 70));

//SetTimeout Function
setTimeout((): void =>{
    console.log("Output Will Display After 3 Second");
}, 3000);

//Clear TimeOut Function
let ip1 = setTimeout(function (): void {
    console.log("Output Will Not Displayed");
}, 2000);
clearTimeout(ip1);

//SetInterval Function
let ip = setInterval(function (): void {
    console.log("Output Will Display In Every 2 Second");
},2000);

//ClearInterval Function
setTimeout(():void=>{
    clearInterval(ip);
},6000);