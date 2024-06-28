function createGlobalVariable() {
    myGlobalVar = "This is a global variable"; // `myGlobalVar` is accidentally global
}
createGlobalVariable();
console.log(myGlobalVar); // "This is a global variable"


function createScopedVariable() {
    let myScopedVar = "This is a scoped variable"; // `myScopedVar` is properly scoped
}
createScopedVariable();
console.log(typeof myScopedVar); // "undefined" - the variable is not global