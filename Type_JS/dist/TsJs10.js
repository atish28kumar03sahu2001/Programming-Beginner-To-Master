"use strict";
//Function
function demo1() {
    console.log("Demo1 Function");
}
demo1();
function demo2() {
    return 20 + 50;
}
console.log(demo2());
//Arrow Function
let demo3 = () => {
    console.log("Arrow Demo Function");
};
demo3();
let demo4 = (a, b) => {
    return a * b;
};
console.log(demo4(50, 70));
//SetTimeout Function
setTimeout(() => {
    console.log("Output Will Display After 3 Second");
}, 3000);
//Clear TimeOut Function
let ip1 = setTimeout(function () {
    console.log("Output Will Not Displayed");
}, 2000);
clearTimeout(ip1);
//SetInterval Function
let ip = setInterval(function () {
    console.log("Output Will Display In Every 2 Second");
}, 2000);
//ClearInterval Function
setTimeout(() => {
    clearInterval(ip);
}, 6000);
