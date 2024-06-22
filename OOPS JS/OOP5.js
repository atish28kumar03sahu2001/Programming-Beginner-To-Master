let OBJ1 = {name: "Atish", age: 20, roll: 100};
console.log(OBJ1);

let OBJ2 = new Object();
OBJ2.name = "Lipun";
OBJ2.age = 30;
OBJ2.num = 1234567890;
console.log(OBJ2);

function OBJ3(id, name) {
    this.id = id;
    this.name = name;
}
let O3 = new OBJ3(100, "MAKS");
console.log(`${O3.id} -- ${O3.name}`);