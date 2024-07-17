/*Write a program to print the digits of a number. N = 153 Output = 3 5 1*/
let num8:number = 153;
while(num8 != 0){
    let rem:number = num8 % 10;
    console.log(rem);
    num8 = Math.floor(num8 / 10);
}