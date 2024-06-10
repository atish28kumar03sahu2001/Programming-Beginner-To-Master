//Block Scoped
function letExample() {
    let a = 10;
    if(true){
        let a = 20;
        console.log(a);
    }
    console.log(a);
}
letExample();

//Hoisting
console.log(b);
let b = 5;
console.log(b);

//Cannot be redeclared but can be reassigned
let c = 10;
// let c = 20;
c = 30;
console.log(c);