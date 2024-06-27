//Implicit Object Binding
var myObj = {
    myvar: "I am an Object Variable",
    myMethod: function (){
        console.log(this.myvar); //I am an Object Variable
        console.log(window.myvar); //undefined
    }
}
myObj.myMethod();
function globalFunction(){
    console.log(this.myvar); //undefined
    console.log(window.myvar); //undefined
}
globalFunction();