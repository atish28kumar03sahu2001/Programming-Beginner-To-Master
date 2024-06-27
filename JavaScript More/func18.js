var global = "I am a global variable";
function exmpF(){
    console.log(this.global); //"I am a global variable" in non-strict. undefined in strict mode.
    console.log(window.global); //"I am a global variable"
}