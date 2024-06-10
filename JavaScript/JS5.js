//Function Scoped
function varExample () {
    var x = 10;
    if(true){
        var x = 20;
        console.log(x);
    }
    console.log(x);
}
varExample();

//Hoisting
console.log(y);
var y = 5;
console.log(y);

//Can be redeclared and reassigned
var z = 10;
console.log(z);
var z = 20;
console.log(z);
z = 30;
console.log(z);