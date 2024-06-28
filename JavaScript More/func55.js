//Function That Returns A New Function
function createMult(mult) {
    return function(number){
        return number * mult;
    };
}
const double = createMult(2);
console.log(double(5));