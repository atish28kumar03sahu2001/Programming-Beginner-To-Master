//Asynchronous Callback
function func(callback) {
    console.log("Start");
    setTimeout(function(){
        callback();
    },2000);
    console.log("End");
}
function callbackFunction(){
    console.log("Callback Executed");
}
fun1(callbackFunction);