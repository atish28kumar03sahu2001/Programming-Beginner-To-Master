"use strict";
const getData = (product) => {
    console.log(product);
    // product.id = "ASASAS" //It will show error because of readonly
};
const product1 = {
    id: "01",
    name: "Laptop",
    stock: 50,
    price: 100000,
    photo: "SamplePhotoURL"
};
getData(product1);
const getData1 = (product) => {
    return product;
};
const p1 = {
    name: "ABCD",
    stock: 15,
    id: "11",
};
console.log(getData1(p1));
/***************************************************** */
//never type in TypeScript
function throwError(message) {
    throw new Error(message);
}
try {
    throwError("Something went wrong!");
}
catch (e) {
    console.log(e.message); // Output: Something went wrong!
}
