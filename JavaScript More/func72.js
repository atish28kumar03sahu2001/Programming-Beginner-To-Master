//Returning Functions From Other Functions
function createMult(factor){
    return function(x){
        return x * factor;
    }
}
const double = createMult(2);
console.log(5);