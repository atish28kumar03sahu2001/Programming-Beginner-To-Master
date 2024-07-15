/*The task is to find the nth number in the Fibonacci series. using 3 variable*/
let num4 = parseInt(prompt("Enter Range Value : ")||"0",10);
let n3:number = 0;
let n4:number = 1;
let res1:number = 0;
for(let i:number = 0; i < num4; i++){
    res1 = n3;
    let temp:number = n3 + n4;
    n3 = n4;
    n4 = temp;
}
console.log(res1);