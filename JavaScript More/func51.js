let ar = [1,2,3,4,5,6,7,8,9,10];

let mp1 = ar.map((val)=>{
    return val * val;
})
console.log(mp1);

let fil1 = ar.filter(n => {
    if(n % 2 == 0){
        return n;
    }
});
console.log(fil1);