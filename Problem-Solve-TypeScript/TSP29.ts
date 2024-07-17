/*By using while loop and continue statement Print all number from 1 to n but then it should not be divisible by 5*/
let val6:number = 50;
let i2:number = 1;
while(i2 <= val6) {
    if(i2 % 5 === 0){
        i2++;
        continue;
    }
    console.log(i2);
    i2++;
}