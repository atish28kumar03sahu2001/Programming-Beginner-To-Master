function RegularFunction() {
    console.log(arguments);
}
RegularFunction(1, 2, 3); // Logs: [1, 2, 3]

const ArrowFunction = (...args) => {
    console.log(args);
};
ArrowFunction(1, 2, 3); // Logs: [1, 2, 3]