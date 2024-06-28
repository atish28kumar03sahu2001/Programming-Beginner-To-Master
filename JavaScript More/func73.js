//Passing Functions As Arguments To Other Functions
function applyOperation(x,y,oper){
    return oper(x,y);
}
function add(x,y){
    return x + y;
}
function sub(x,y){
    return x - y;
}
console.log(applyOperation(5,3,add));
console.log(applyOperation(12,15,sub));