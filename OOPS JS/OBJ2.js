//Access Elements From An Object
let Obj1 = {
    name: "Maks Void",
    roll: 100,
    address: "India",
    phone: 1596320487,
    mail: "maksvoid@mail.com",
}
for(let i in Obj1){
    console.log(`${i} : ${Obj1[i]}`);
}