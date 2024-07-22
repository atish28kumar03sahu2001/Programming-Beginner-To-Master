/*Prime Number From 1 To n*/
let range0:number = 100;
for(let i:number = 1; i <= range0; i++){
    let flag = true;
    if(i <= 1) {
        flag = false;
    } else {
        for(let j: number = 2; j <= Math.sqrt(i); j++) {
            if(i % j === 0){
                flag = false;
                break;
            }
        }
    }
    if(flag) console.log(i);
}