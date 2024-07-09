/*The Number Is Leap Year Or Not*/
let year = parseInt(prompt("Enter Year Value : ")||"0",10);
let Leapyear = (year: number) => {
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} Is Leap Year`);
    } else {
        console.log(`${year} Is Not Leap Year`);
    }
}
Leapyear(year);