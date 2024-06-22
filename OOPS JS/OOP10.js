function Employee(First, Last) {
    this.First = First;
    this.Last = Last;
}
Employee.prototype.Fullname = function() {
    return this.First+"--"+this.Last;
}
let E1 = new Employee("Maks", "Void");
console.log(E1.Fullname);

let E2 = new Employee("John", "Doe");
console.log(E2.Fullname);