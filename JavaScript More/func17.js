var global = "i am a global variable";
function exmp(){
    console.log(this.global); //"i am a global variable" in non-strict undefined in strict mode
    console.log(window.global); //"i am a global variable"
}
exmp();