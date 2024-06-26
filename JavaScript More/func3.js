//Lexical Scope
function outerFunction(){
    var outer = `I am from the outer value`;
    function innerFunction(){
        var inner = `I am from the inner value`;
        console.log(outer);
        console.log(inner);
    }
    innerFunction();
}
outerFunction();