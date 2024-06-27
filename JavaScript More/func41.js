//clearInterval Function
let func = () => {
    console.log("tick");
}
let id = setInterval(func,1000);

setTimeout(()=>{
    clearInterval(id);
    console.log("Stopped");
},5000);