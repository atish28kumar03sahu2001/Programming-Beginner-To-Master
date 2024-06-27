function calculate(num1, num2, callback){
    return callback(num1, num2);
}
function add(a,b){
    return a + b;
}
function mult(a,b) {
    return a * b;
}
console.log(calculate(20,70,add));
console.log(calculate(30,80,mult));