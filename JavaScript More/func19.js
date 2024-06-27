var global = "I am global";
var Obj = {
    myVar: "i am an object",
    myMethod: function (){
        console.log(this.myVar); //i am an object
        console.log(window.global); //i am global
    }
}
Obj.myMethod();