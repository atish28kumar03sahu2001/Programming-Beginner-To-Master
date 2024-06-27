function RegularFunction() {
    console.log(this);
}  
const obj = {
    method: RegularFunction,
};
obj.method(); // 'this' refers to 'obj' 
/***************************************************** */
const ArrowFunction = () => {
    console.log(this);
};  
const obj1 = {
    method: ArrowFunction,
};  
obj1.method(); // 'this' refers to the enclosing scope, not 'obj'  