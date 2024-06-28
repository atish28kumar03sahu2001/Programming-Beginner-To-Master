function greet(name, formatter){
    return formatter(name);
}
function simpleGreet(name){
    return `Hello ${name}`;
}
function excitedGreet(name){
    return `Hi There ${name}!!!`;
}
const name = "MAKS VOID";
console.log(greet(name, simpleGreet));
console.log(greet(name, excitedGreet));