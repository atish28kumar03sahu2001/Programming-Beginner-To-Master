/*Write a program using only while loops to print all the even numbers from 1 to n*/
let val5 = parseInt(prompt("Enter Value: ")||"0",10);
let i:number = 1;
while(i <= val5){
    if(i % 2 === 0) console.log(i);
    i++;
}