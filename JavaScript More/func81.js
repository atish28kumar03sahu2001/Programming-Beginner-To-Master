//Instance Method
class person{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log("Hello"+this.name);
    }
}
const alice = new person("Alice");
alice.greet();