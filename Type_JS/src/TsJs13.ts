//Currying In JavaScript
function curryAdd(a:number): Function {
    return function(b:number): Function {
        return function(c:number): number {
            return a + b + c;
        }
    }
}
console.log(curryAdd(1)(2)(3));

//Memorization
function fibo(n:number): any {
    if(n <= 1) return n;
    return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(10));

//Thunk In JavaScript
const addd = (a:number,b:number):Function => ():number => a + b;

const addT = addd(5, 10);
console.log(addT());

function createThunk(value:number): Function {
    return function() {
        return value;
    }
}
const thunk = createThunk(42);
console.log(thunk());

//Tail Recursion
function fact(n:number, acc:number = 1):any{
    if(n === 0) {
        return acc;
    }
    return fact(n - 1, n * acc);
}
console.log(fact(5));