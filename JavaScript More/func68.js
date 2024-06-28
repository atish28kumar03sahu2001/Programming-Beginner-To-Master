//Function Hoisting
console.log(mult(2,3));
function mult(a,b){
    return a * b;
}
console.log(divide(6,3));
const divide = function(a,b) {
    return a / b;
}