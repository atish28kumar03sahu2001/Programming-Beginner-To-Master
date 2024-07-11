/*Find Age Of The User*/
const prompt = require("prompt-sync")();
let birthdate = prompt("Enter Birth Date : ");
let date1 = new Date(birthdate);
let date2 = new Date();

let year = date2.getFullYear() - date1.getFullYear();
let month = date2.getMonth() - date1.getMonth();
let day = date2.getDate() - date1.getDate();

if (month < 0 || (month === 0 && day < 0)) {
    year--;
    month += 12;
}
if (day < 0) {
    let lastmonth = new Date(
        date2.getFullYear(), date2.getMonth(), 0
    );
    day = lastmonth.getDate() + day;
}

console.log(`User Age Is ${year} year, ${month} month, ${day} day`);