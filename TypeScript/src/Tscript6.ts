//Function With Object
type productType = {
    name:string, 
    stock:number, 
    price:number, 
    photo:string
    readonly id:string
}
type GetDataType = (product:productType) => void

const getData: GetDataType = (product) => {
    console.log(product);
    // product.id = "ASASAS" //It will show error because of readonly
}
const product1: productType  = {
    id: "01",
    name:"Laptop", 
    stock: 50, 
    price: 100000, 
    photo:"SamplePhotoURL"
}
getData(product1);
/***************************************************** */
interface ProdType {
    name: string,
    stock: number,
    readonly id: string
}
type GetDataType1 = (product: ProdType) => object;
const getData1: GetDataType1 = (product) => {
    return product;
} 
const p1: ProdType = {
    name: "ABCD",
    stock: 15,
    id: "11",
}
console.log(getData1(p1));
/***************************************************** */
//never type in TypeScript
function throwError(message: string): never {
    throw new Error(message);
}
try {
    throwError("Something went wrong!");
} catch (e:any) {
    console.log(e.message); // Output: Something went wrong!
}