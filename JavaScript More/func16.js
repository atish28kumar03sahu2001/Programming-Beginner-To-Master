//Dynamic Binding
var myObject = {
    myVar: "I am an Object Variable",
    myMethod: function() {
        console.log(this.myVar);//"I am an Object Variable"
    }
}
var anotherObject = {
    myVar: "I am another object variable",
}
myObject.myMethod.call(anotherObject); //"I am another object variable"