/*Prime Number */
let num2:number = 51;
let flag:boolean = true;
if(num2 <= 1) {
    flag = false;
} else {
    for(let i:number = 2; i < Math.sqrt(num2); i++) {
        if(num2 % i === 0) {
            flag = false;
            break;
        }
    }
}
if(flag) console.log("Prime number");
else console.log("Not prime number");