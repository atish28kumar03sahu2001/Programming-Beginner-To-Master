/*
Return addition of numbers that are divisible by 7 in the given range.
Input: start = 1, end = 20		Output: 21
Explanation: Here, the numbers divisible by 7 in the range are 7 and 14, and their sum is 21.
input: start = 10, end = 30		Output: 63
Here, the numbers divisible by 7 in the range are 14, 21, and 28, and their sum is 63.
*/
let v1:number = 30, v2:number = 60;
let func = (s:number, e:number): number => {
    let count:number = 0;
    for(let i:number = s; i <= e; i++) {
        if(i % 7 === 0){
            count += i;
        }
    }
    return count;
}
console.log(func(v1,v2));