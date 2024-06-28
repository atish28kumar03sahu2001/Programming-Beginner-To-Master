//Function That Manipulate Other Functions
function repeat(func, n){
    for(let i = 0; i < n; i++){
        func();
    }
}
function greet(){
    console.log("hello");
}
repeat(greet, 3);