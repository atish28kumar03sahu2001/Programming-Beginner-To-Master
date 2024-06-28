//Generator Function
function* fibo(){
    let [prev, cur] = [0, 1];
    while(true){
        yield cur;
        [prev, cur] = [cur, prev + cur];
    }
}
const fb = fibo();
console.log(fb.next().value);//1
console.log(fb.next().value);//1
console.log(fb.next().value);//2
console.log(fb.next().value);//3
console.log(fb.next().value);//5