const one = (callback) => {
    console.log("Task1");
    callback();
}
const two = (callback) => {
    console.log("Task2");
    callback();
}
const three = (callback) => {
    console.log("Task3");
    callback();
}
const four = () => {
    console.log("Task4");
}

one(()=>{
    two(()=>{
        three(()=>{
            four();
        })
    })
})