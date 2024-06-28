//Array Methods That Accept Callback Functions
const numbers = [1,2,3,4,5,6];
const double = numbers.map(function(number){
    return number * 2;
})
console.log(double);