/*You are given q queries in the form of a, b, and n for each query, print the series corresponding to the given a, b, and n values as a single line of n space-separated integers.*/
let p:number = 15;
for(let i:number = 0; i < p; i++) {
    let a:number = 10;
    let b:number = 11;
    let c:number = 12;
    for(let j:number = 0; j < c; j++) {
        a + b * Math.pow(2,j);
        console.log(a+" ");
    }
    console.log();
}