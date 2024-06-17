//Parsing Dates
let dateString = "2024-06-17T10:00:00Z";
let parsedDate = Date.parse(dateString);

console.log(parsedDate);
console.log(new Date(parsedDate).toString());

//Date Math
let date1 = new Date();
let date2 = new Date(date1.getTime() + (1000 * 60 * 60 * 24));

console.log(date1.toString());
console.log(date2.toString());

let diffInMilliseconds = date2 - date1;
console.log(diffInMilliseconds);

//Comparing Dates
let date3 = new Date(2024, 5, 17);
let date4 = new Date(2025, 5, 17);

console.log(date3 < date4);
console.log(date3 > date4);
console.log(date3.getTime() === date4.getTime());