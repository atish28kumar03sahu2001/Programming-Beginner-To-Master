"use strict";
/*Whether The Number Is Positive Or Negative Or 0*/
let val0 = parseInt(prompt("Enter A Number : ") || "0", 10);
let pro1 = (num) => {
    if (num > 0)
        return `${num} is a positive number`;
    else if (num < 0)
        return `${num} is a negative number`;
    else
        return `${num} value is 0`;
};
console.log(pro1(val0));
