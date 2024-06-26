//Local Variable
function func(){
    let local = 200;
    console.log(`Local : ${local}`); //200
    local = 400;
    console.log(`Local : ${local}`); //400
}
func();
console.log(`local : ${local}`); //ReferenceError: local is not defined.