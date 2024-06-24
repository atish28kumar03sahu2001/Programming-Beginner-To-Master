//Object Prototype
function Employee(FrName, LsName) {
    this.FrName = FrName;
    this.LsName = LsName;
}
Employee.prototype.FullName = function(){
    return this.FrName+"---"+this.LsName;
}
let E1 = new Employee("Maks","Void");
let E2 = new Employee("John","Doe");

function Objc (name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
}
Objc.prototype.roll = 100;
let per1 = new Objc("Lipun","India",22);
console.log(per1);
console.log(per1.roll);