//variadic function
function func(){
    let res = [];
    for(let i = 0; i < arguments.length; i++){
        res.push(Arguments[i]);
    }
    return res;
}
console.log(func(1,2,3,4,5,6));

let func1 = (...arguments) => {
    return arguments;
}
console.log(func1(1,2,3,4,5,6,7,8,9));