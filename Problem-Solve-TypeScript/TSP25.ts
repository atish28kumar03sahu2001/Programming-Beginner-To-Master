/*Print all the perfect squares between 1 and N.*/
let num5 = parseInt(prompt("Enter Num Value : ")||"0",10);
for(let i:number = 1; i * i <= num5; i++){
    console.log(i * i);
}