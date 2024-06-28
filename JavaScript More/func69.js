const greet = function() {
    console.log("Hello World");
};
greet();
setTimeout(function(){
    console.log("This Message Is Delayed By 1 Second");
}, 1000);