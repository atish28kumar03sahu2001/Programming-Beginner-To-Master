/*Perform Arithmetic Operation*/
let num1: number = parseInt(prompt("Enter Numeric Value1: ") || '0', 10);
let num2: number = parseInt(prompt("Enter Numeric Value2: ") || '0', 10);
let choice: number = parseInt(prompt("Enter Choice For Operation: ") || "0", 10);

switch(choice) {
    case 1 : 
        console.log(`Addition : ${num1 + num2}`);
        break;
    case 2 : 
        console.log(`Subtraction : ${num1 - num2}`);
        break;
    case 3 : 
        console.log(`Multiplication : ${num1 * num2}`);
        break;
    case 4 : 
        console.log(`Division : ${num1 / num2}`);
        break;
    case 5 : 
        console.log(`Reminder : ${num1 % num2}`);
        break;
    default : 
        console.log("Invalid Option For Choice");
        break;
}