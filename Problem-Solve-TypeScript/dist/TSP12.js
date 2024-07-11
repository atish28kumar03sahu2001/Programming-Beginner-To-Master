"use strict";
/*Find Age Of The User*/
let Birthday = "28-03-2001";
let date1 = new Date(Birthday);
let today = new Date();
let Byear = today.getFullYear() - date1.getFullYear();
let Bmonth = today.getMonth() - date1.getMonth();
let Bday = today.getDate() - date1.getDate();
if (Bmonth < 0 || (Bmonth === 0 && Bday < 0)) {
    Byear--;
    Bmonth += 12;
}
if (Bday < 0) {
    let lastmonth = new Date(today.getFullYear(), today.getMonth(), 0);
    Bday = lastmonth.getDate() + Bday;
}
console.log(`User Age Is ${Byear} year, ${Bmonth} month, ${Bday} day`);
