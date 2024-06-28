const factorial = function fact(n) {
    if(n <= 1) return 1;
    return n * fact(n - 1);
}
console.log(factorial(5));

if(true){
    const sayHi = function() {
        console.log("Hi");
    };
    sayHi();
}