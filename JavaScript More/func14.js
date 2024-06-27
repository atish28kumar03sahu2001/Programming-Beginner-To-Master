//Use In Function
var myObject = {
    myVar: "I am an Object Variable",
    myMethod: function() {
        console.log(this.myVar); //I am an Object Variable
    }
}
function globalFunction(){
    console.log(window.global); 
}
myObject.myMethod();
globalFunction();