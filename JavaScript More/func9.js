//context
var global = "I am global";
var Obj = {
    myvar: "I am Object Variable",
    myMethod: function(){
        console.log(this.myvar); // "I am Object Variable"
        console.log(window.global); // "I am global"
    }
}
Obj.myMethod();