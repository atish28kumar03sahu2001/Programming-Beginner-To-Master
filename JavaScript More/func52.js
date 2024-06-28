let ar = [1,2,3,4,5,6,7,8,9,10];

let sum = ar.reduce((Acc,cur)=>{
    return acc + cur;
}, 0);

ar.forEach(val => {
    if(val % 2 !== 0){
        console.log(val);
    }
})
console.log(ar.sort((a,b)=>b - a));