//Synchronous Callback
function func(callback) {
    console.log("Start");
    callback();
    console.log("End");
}
function callbackFunction(){
    console.log("Callback Executed");
}
fun1(callbackFunction);