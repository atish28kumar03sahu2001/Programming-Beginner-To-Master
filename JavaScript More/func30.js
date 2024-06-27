//Callback function 1
let func1 = (name, callback) => {
    console.log(name);
    callback("Name2");
}
let func2 = (name) => {
    console.log(name);
}
func1("Name1",func2);

//Callback function 2
let func3 = (name, callback) => {
    console.log(name);
    callback("Name4");
}
let func4 = (name, callback) => {
    console.log(name);
    callback("name5");
}
let func5 = (name) => {
    console.log(name);
}
func3("Name3",(name) => func4(name, func5));