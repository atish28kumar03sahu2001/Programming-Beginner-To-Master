let v1 = 2500;
console.log(v1);

let v2 = "MAKS VOID";
console.log(v2);

let v3: string = "VOID MAKS";
let v4:number = 152364789;
let v5:boolean = false;
let v6; //any if you don't give any datatype
let v7:any;

let v8 = <string>"Deva";

//union variable
let surname:string|number;

let func1 = (a1:number, a2:string) => {
    console.log(a1, a2);
}
func1(15, "22");

let func2 = (a1:number, a2:number) => {
    console.log(a1, a2);
}
func2(10,20);