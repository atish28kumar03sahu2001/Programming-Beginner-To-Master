//TYPE ASSERTION

let someValue: unknown = "Hello, TypeScript";

// Using angle-bracket syntax
let strLength1: number = (<string>someValue).length;

// Using as-syntax
let strLength2: number = (someValue as string).length;

console.log(strLength1); // Output: 16
console.log(strLength2); // Output: 16

/*************************************************************************** */

const aa = document.getElementById("btn") as HTMLElement;
const bb = <HTMLElement> document.getElementById("btn1");
const cc = document.getElementById("btn2")!;
const img1 = document.getElementById("imgid") as HTMLImageElement;

const FRM = document.getElementById("FRM") as HTMLFormElement;
const IP1 = document.getElementById("IP1") as HTMLInputElement;
const IP2 = document.getElementById("IP2") as HTMLInputElement;
FRM.onsubmit = (e:SubmitEvent) => {
    e.preventDefault();
    const IP1V:string = String(IP1.value);
    const IP2V:number = Number(IP2.value);
    console.log(`IP1 : ${IP1V}, IP2 : ${IP2V}`);

    let p = document.createElement("P") as HTMLElement;
    p.innerHTML = `${IP1V} = ${IP2V + 20}`;
    document.body.appendChild(p);
}