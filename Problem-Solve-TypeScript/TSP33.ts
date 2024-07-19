/*Print the following series using for loop:- 1,8,27,64,125,216,......n*/
let n1: number = 10;
for(let i: number = 1; i*i*i <= n1; i++){
    console.log(i*i*i);
}