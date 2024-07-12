/*Write a program to print the largest number of the two numbers */
let v1: number = 20;
let v2: number = 40;
let large = (v1:number, v2:number) => {
    if(v1 > v2) return `${v1} greater than ${v2}`;
    else return `${v1} lesser than ${v2}`;
}
console.log(large(v1, v2));