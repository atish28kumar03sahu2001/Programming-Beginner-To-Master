class Person {
    #ph;
    constructor(name, age, ph){
        this.name = name;
        this.age = age;
        this.#ph = ph;
    }
    greet(){
        console.log(`${this.name} -- ${this.age}`);
    }
    #getph(){
        return this.#ph;
    }
    showph(){
        console.log(`${this.#getph}`);
    }
}
const P1 = new Person("Maks Void", 20, 1234567890);
P1.greet();
P1.showph();
// console.log(`${P1.#ph} -- ${P1.#getph()}`); // error