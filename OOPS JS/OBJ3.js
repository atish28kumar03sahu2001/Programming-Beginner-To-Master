let Obj1 = {
    name: "Maks Void",
    roll: 100,
    address: "India",
    phone: 1596320487,
    mail: "maksvoid@mail.com",
}
for(let x in Obj1){
    console.log(Obj1[x]);
} console.log();

//Update Element In Obj
Obj1.name = "Lipun Maks";
for(let x in Obj1){
    console.log(Obj1[x]);
} console.log();

//Check Element Available in Obj
console.log("roll" in Obj1);
console.log("city" in Obj1);

//Add Element In Obj
Obj1.dob = "28-03-2001";
console.log(Obj1);

//Delete Element In Obj
delete Obj1.address;
console.log(Obj1);