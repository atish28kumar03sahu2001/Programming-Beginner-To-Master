//Self-Executing Function/Immediate Invoked Function
(function(){
    console.log("Self Executing Function")
})();

(function(a,b){
    console.log(`value: ${a * b}`);
})(20,60);