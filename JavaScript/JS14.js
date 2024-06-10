let x;
console.log(x); //undefined

let y = null;
console.log(y); //null

try {
    console.log(z); //Reference Error: z is not defined
} catch (error) {
    console.log(error.message); //z is not defined
}