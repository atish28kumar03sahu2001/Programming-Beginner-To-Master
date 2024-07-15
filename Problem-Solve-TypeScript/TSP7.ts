/*Whether the number is even or odd*/
let number1: number = parseInt(prompt("Enter Number : ")||"0",10);

let evenodd = (num:number) => {
    if(num % 2 === 0) {
        return "Even Number"
    } else {
        return "Odd Number"
    }
}
console.log(evenodd(number1));

let isEvenOdd = (num:number) => {
    if((num & 1) === 0) {
        return "EVEN NUMBER"
    } else {
        return "ODD NUMBER";
    }
}
console.log(isEvenOdd(number1));