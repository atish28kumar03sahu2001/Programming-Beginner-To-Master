var Obj = {
    myVar: "I am an Object",
    myMethod: function() {
        console.log(this.myVar); //i am an object
    }
}
Obj.myMethod();
function globalFunction(){
    console.log(this.myVar);//undefined
}
globalFunction();