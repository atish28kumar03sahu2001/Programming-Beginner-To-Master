"use strict";
//TYPE ASSERTION
let someValue = "Hello, TypeScript";
// Using angle-bracket syntax
let strLength1 = someValue.length;
// Using as-syntax
let strLength2 = someValue.length;
console.log(strLength1); // Output: 16
console.log(strLength2); // Output: 16
/*************************************************************************** */
const aa = document.getElementById("btn");
const bb = document.getElementById("btn1");
const cc = document.getElementById("btn2");
const img1 = document.getElementById("imgid");
const FRM = document.getElementById("FRM");
const IP1 = document.getElementById("IP1");
const IP2 = document.getElementById("IP2");
FRM.onsubmit = (e) => {
    e.preventDefault();
    const IP1V = String(IP1.value);
    const IP2V = Number(IP2.value);
    console.log(`IP1 : ${IP1V}, IP2 : ${IP2V}`);
    let p = document.createElement("P");
    p.innerHTML = `${IP1V} = ${IP2V + 20}`;
    document.body.appendChild(p);
};
