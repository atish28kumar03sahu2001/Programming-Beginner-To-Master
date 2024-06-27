//Function Execution
var global = "I am Global Variable";
function exampFunction () {
    console.log(this.global); //"I am Global Variable" in non-strict undefined in strict mode
    console.log(window.global); //"I am Global Variable"
}
exampFunction();