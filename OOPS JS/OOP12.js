class Employee {
    constructor(name){
        this.name = name;
    }
}
class Branch extends Employee {
    constructor(id, name, branch) {
        super(name);
        this.id = id;
        this.branch = branch;
    }
}
let E1 = new Branch(101,"Maks Void", "CSE");
console.log(E1.id+"---"+E1.name+"---"+E1.branch);