//Nested If...Else In JS
let hour = 14;
let greeting = "";
if(hour < 12){
    greeting = "Good Morning";
} else {
    if(hour < 18){
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }
}
console.log(greeting);