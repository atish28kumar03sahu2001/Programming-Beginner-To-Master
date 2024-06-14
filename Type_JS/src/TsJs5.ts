//Break & Continue
for(let i: number = 5; i <= 15; i++){
    if(i === 10){
        break;
    } console.log(i);
}

for(let j: number = 15; j <= 25; j++){
    if(j === 20){
        continue;
    } console.log(j);
}

//Type Conversion
let num1: number = 1234567890;
console.log(String(num1));

let str1: string = '123456';
console.log(Number(str1));

let str2: string = "true";
console.log(Boolean(str2));