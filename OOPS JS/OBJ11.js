//Function Prototype
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.displayInfo = function () {
    console.log(`${this.year} ${this.make} ${this.model}`);
};

Car.prototype.startEngine = function () {
    console.log(`${this.make} ${this.model} engine started.`);
};

const car1 = new Car('Toyota', 'Camry', 2020);
const car2 = new Car('Honda', 'Accord', 2021);

car1.displayInfo(); // Output: 2020 Toyota Camry
car2.displayInfo(); // Output: 2021 Honda Accord

car1.startEngine(); // Output: Toyota Camry engine started.
car2.startEngine(); // Output: Honda Accord engine started.