/*Write a program to print whether a given number is an Armstrong number or not. N = 153 Output: true*/
let n: number = 153;
let N:number = n, res: number = n, rem:number = 0, count:number = 0, sum:number = 0;
while(n !== 0){
    rem = n % 10;
    count++;
    n = Math.floor(n/10);
}
while(N !== 0){
    let rem1: number = N % 10;
    sum += Math.pow(rem1, count);
    N = Math.floor(N/10);
}
if(sum === res) console.log(true);
else console.log(false);