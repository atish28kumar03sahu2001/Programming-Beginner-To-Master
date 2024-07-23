/*Given an integer “n” perform the following conditional actions. If n is odd print “weird”. If n is even and in this inclusive range of 2 to 5 print “not weird”. If n is even and in this inclusive range of 6 to 20 then print “weird”. If n is even and greater than 20 print or “not weird”.*/
let num1: number = 159324;
if(num1 % 2 !== 0) console.log("Weird");
else if(num1 >= 2 && num1 <= 5) console.log("Not Weird");
else if(num1 >= 6 && num1 <= 20) console.log("Weird");
else console.log("Not Weird");