//Closure In JavaScript
function func(){
    let outer = "Outer Function";
    function func1(){
        console.log(outer);
    }
    return func1;
}
let op = func();
op();

function outerFunction() {
    let outerVar = "I Am An Outer Variable";
    function innerFunction(){
        console.log(outerVar);
    }
    return innerFunction;
}
const closureFunction = outerFunction();
closureFunction();

function createMult(mult) {
    return function(num){
        return num * mult;
    }
}
const double = createMult(5);
console.log(double(5));

const triple = createMult(10);
console.log(triple(7));