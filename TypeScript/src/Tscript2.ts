//Type Concept
type ID0 = number | string;
let value1: ID0 = "ABCD";
console.log(`value1 : ${value1}`);
value1 = 12345;
console.log(`value1: ${value1}`);

//Interface Concept
interface ID1 {
    v1: number,
    v2: string,
}
let value2: ID1 = {
    v1: 12345,
    v2: "MAKS VOID"
}
console.log(value2);