//scope
var global = "I am global variable";
function exmp() {
    var localv = "I am local variable";
    console.log(this.global); //undefined in strict mode "i am global variable" in non-strict mode
    console.log(window.global); //"I am global variable"

    console.log(this.localv); //undefined
    console.log(window.localv); //undefined
}
exmp();