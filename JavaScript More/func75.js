//Generator Function
function* counter() {
    let count = 0;
    while(count < 3){
        yield count++;
    }
}
const counter = counter();
console.log(counter.next().value); //0
console.log(counter.next().value); //1
console.log(counter.next().value); //2
console.log(counter.next().value); //undefined