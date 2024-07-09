let range1:number = parseInt(prompt("Enter Range1 Value : ")||"0",10);
let range2:number = parseInt(prompt("Enter Range2 Value : ")||"0",10);

let EvenR = (r1:number, r2:number) => {
    for(let i:number = r1; i <= r2; i++) {
        if(i % 2 === 0) {
            console.log(`${i}`);
        }
    }
}
EvenR(range1, range2);

let OddR = (r1:number, r2:number) => {
    for(let i:number = r1; i <= r2; i++) {
        if(i % 2 !== 0) {
            console.log(`${i}`);
        }
    }
}
OddR(range1, range2);