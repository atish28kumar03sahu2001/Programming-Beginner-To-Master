/*
Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
Input: n = 00000000000000000000000000001011 decimal = 11		Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
Input: n = 00000000000000000000000010000000 decimal = 128		Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
*/
let v3:number = 11;
let output = (n:number):number => {
    let bin:string = n.toString(2);
    let count:number = 0;
    for(let i: number=0 ; i < bin.length; i++) {
        if(bin.charAt(i) === '1') {
            count++;
        }
    }
    return count;
}
console.log(output(v3));