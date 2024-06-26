//local Scope
function myFunc() {
    var localvar = "I am local value1";
    let locallet = "I am local value2";
    const localconst = "i am local value3";

    console.log(`${localvar} --- ${locallet} --- ${localconst}`);
}
myFunc();
console.log(`${localvar} --- ${locallet} --- ${localconst}`); //ReferenceError