class Person {
    #name;   #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    //Getter Concept
    getData(){
        return `${this.#name} -- ${this.#age}`;
    }

    //Setter Concept
    setData(name, age){
        this.#name = name;
        this.#age = age;
    }
}

let P1 = new Person('John Doe', 40);
console.log(P1.getData());

P1.setData("Maks Void",50);
console.log(P1.getData());