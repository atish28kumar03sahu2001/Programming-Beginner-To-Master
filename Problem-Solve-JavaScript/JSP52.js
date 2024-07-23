/*Given an integer “n” perform the following conditional actions. If n is odd print “weird”. If n is even and in this inclusive range of 2 to 5 print “not weird”. If n is even and in this inclusive range of 6 to 20 then print “weird”. If n is even and greater than 20 print or “not weird”.*/
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter Num : "));
if(num % 2 !== 0)   console.log("weird");
else if(num >= 2 && num <= 5)   console.log("not weird");
else if(num >= 6 && num <= 20)  console.log("weird");
else console.log("not weird");