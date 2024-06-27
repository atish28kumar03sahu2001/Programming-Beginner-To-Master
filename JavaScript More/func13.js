//Global Namespace
var myObj = {
    myvar: "I am an Object Variable",
    myMethod: function() {
        this.newVar = "New Variable In Object Context";
    }
}
myObj.myMethod();
console.log(myObj.newVar); //"New Variable In Object Context"
console.log(window.newVar); //undefined
console.log(this.newVar); //undefined