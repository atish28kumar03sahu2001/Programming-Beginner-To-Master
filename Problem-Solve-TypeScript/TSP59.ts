/*Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values. Input: n = 5 Output: true Explain: The binary representation of 5 is: 101*/
let p1:number = 123456789;
let op1 = (n:number):boolean => {
    let prev:number = n % 2;
    n = Math.floor(n / 2);
    while(n > 0) {
        let cur:number = n % 2;
        if(cur === prev) return false;
        prev = cur;
        n = Math.floor(n/2);
    }
    return true;
}
console.log(op1(p1));