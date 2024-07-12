/*Write a program to print the largest of the three numbers.*/
let v3: number = 15;
let v4: number = 17;
let v5: number = 18;
let func0 = (v3:number, v4:number, v5:number) => {
    if(v3 > v4 && v3 > v5) return `${v3} is greatest`;
    else if(v4 > v3 && v4 > v3) return `${v4} is greatest`;
    else return `${v5} is greatest`;
}
console.log(func0(v3, v4, v5));