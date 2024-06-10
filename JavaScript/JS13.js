//Instance Variable
const Func1 = function (name, age) {
    this.name = name;
    this.age = age;
    this.f1 = function () {
        console.log(`Name Is ${this.name} & Age Is ${this.age}`);
    };
}
var func1 = new Func1("Name1",24);
func1.f1();