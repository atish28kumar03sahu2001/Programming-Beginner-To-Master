/*Write a program to print all the numbers from 1 to n .If m is present in between the sequence then stop printing any other number and break out of the loop.*/
let p:number = 20;
let q:number = 40;
for(let i:number = 1; i<= p; i++){
    if(i === q) break;
    console.log(i);
}