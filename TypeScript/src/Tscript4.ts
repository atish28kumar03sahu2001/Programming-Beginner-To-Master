//Array, Tuple, Object, In TypeScript
//Array
let arr1: number[] = [1,2,3,4,5,6,7,8,9,0];
console.log(arr1);

let arr2: string[] = ["a","A","b","B","c","C","d","D"];
console.log(arr2);

let arr3: boolean[] = [true, false, true, false];
console.log(arr3);

let arr4: Array<number> = new Array(5);
arr4 = [1,2,3,4,5];
console.log(arr4);

let arr5: Array<string> = ["M","A","K","S"];
console.log(arr5);

let arr6: Array<string | number> = ["a",1,"b",2,"c",3,"d"];
console.log(arr6);

//Tupple Example
let arr7: [number, string, number, string] = [12,"AKS",15,"LKS"];
console.log(arr7);

//Object Example
let obj1 = {
    name: <string> "MAKS VOID",
    age: <number> 24,
    email: <string> "MAKSVOID@MAIL.COM"
}
console.log(obj1);

type OBJTYPE = {
    name: string;
    age: number;
    email: string;
    gender?: boolean;
}

let obj2:OBJTYPE = {
    name: "UserName1",
    age: 52,
    email: "UserName1@mail.com",
}
console.log(obj2);
let obj3: OBJTYPE = {
    name: "UserName2",
    age: 27,
    email: "UserName2@mail.com",
    gender: false,
}
console.log(obj3);

interface OBJJ {
    name: string;
    age: number;
}
const obj4: OBJJ = {
    name: "Name4", age: 34,
}
console.log(obj4);

interface UDTL extends OBJJ {
    email: string;
    funct1: () => void;
}
const obj5: UDTL = {
    name: "Name5",
    age: 40,
    email: "name5@mail.com",
    funct1: () => {
        console.log("done");
    }
}
console.log(obj5);
obj5.funct1();