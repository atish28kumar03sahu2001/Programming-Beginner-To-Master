let date = new Date();
console.log(date);

let dateString = new Date("2024-06-17T10:00:00");
console.log(dateString);

let dateFromMillis = new Date(1686987600000);
console.log(dateFromMillis);

let dateParams = new Date(2024, 5, 17, 10, 0, 0, 0);
console.log(dateParams);

//Getting Date & Time Components
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());
console.log(date.getTimezoneOffset());