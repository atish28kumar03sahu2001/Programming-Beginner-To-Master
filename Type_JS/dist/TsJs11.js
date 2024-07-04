"use strict";
//CallBack Function
let demo1 = (name, callback) => {
    console.log(name);
    callback("Name2");
};
let demo2 = (name) => {
    console.log(name);
};
demo1("Name1", demo2);
let demo3 = (name, callback) => {
    console.log(name);
    callback();
};
let demo4 = (name, callback) => {
    console.log(name);
    callback("Name5");
};
let demo5 = (name) => {
    console.log(name);
};
demo3("Name3", () => demo4("Name4", demo5));
//CallbackHell
setTimeout(() => {
    console.log("Time1");
    setTimeout(() => {
        console.log("Time2");
        setTimeout(() => {
            console.log("Time3");
            setTimeout(() => {
                console.log("Time4");
            }, 4000);
        }, 3000);
    }, 2000);
}, 1000);
//Self-Executing Function / Immediate Invoked Function
(function () {
    console.log("Self-Executing Function");
})();
const result = (function (a, b) {
    return a * b;
})(15, 45);
console.log(result);
//Closure In Function
let demo6 = () => {
    let outer = "Outer Function";
    let demo7 = () => {
        console.log(outer);
    };
    return demo7;
};
let op1 = demo6();
op1();
let demo8 = (d8) => {
    let op2 = d8 * 100;
    let demo9 = (s8) => {
        console.log(op2 + s8);
    };
    return demo9;
};
let op3 = demo8(12);
op3(50);
