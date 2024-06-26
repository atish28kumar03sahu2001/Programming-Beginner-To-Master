//global variable
let global = 150;
console.log(`Global : ${global}`); //150
function func(){
    console.log(`Global : ${global}`); //150
    global = 200;
    console.log(`Global : ${global}`); //200
}
func();
console.log(`Global : ${global}`); //200