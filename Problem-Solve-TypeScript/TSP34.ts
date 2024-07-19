/*Write a program to print even numbers from 1 to n except numbers which are divisible by 4. Use Continue statement to avoid printing.*/
let N1: number = 20;
for(let i: number = 1; i <= N1; i++){
    if(i % 2 === 0) {
        if(i % 4 !== 0) {
            console.log(i);
        }
    }
}