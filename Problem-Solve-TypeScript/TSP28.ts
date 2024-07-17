/*Print the following series using while loop 1 4 9 16 25 36 …. n*/
let n5:number = 50;
let i1:number = 1;
while(i1 <= n5) {
    let res:number = i1 * i1;
    if(res > n5) break;
    console.log(res);
    i1++;
}