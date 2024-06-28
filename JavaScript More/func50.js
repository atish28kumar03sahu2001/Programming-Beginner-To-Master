function createMultiplier(mult){
    return function(x){
        return x * mult;
    };
}
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(10));