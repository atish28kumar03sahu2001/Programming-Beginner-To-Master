"use strict";
/*Write a program to print the largest of the three numbers.*/
let v3 = 15;
let v4 = 17;
let v5 = 18;
let func0 = (v3, v4, v5) => {
    if (v3 > v4 && v3 > v5)
        return `${v3} is greatest`;
    else if (v4 > v3 && v4 > v3)
        return `${v4} is greatest`;
    else
        return `${v5} is greatest`;
};
console.log(func0(v3, v4, v5));
