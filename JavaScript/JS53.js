let date = new Date();

//Setting Date & Time Components
date.setFullYear(2025);
date.setMonth(6);  
date.setDate(20);
date.setHours(15);
date.setMinutes(45);
date.setSeconds(30);
date.setMilliseconds(500);
console.log(date.toString());

//Formatting Dates
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toISOString());
console.log(date.toUTCString());