/*
Input: Every line of input will contain a string followed by an integer. Each string will have a maximum of 10 alphabetic characters and each integer will be in the inclusive range from 0 to 999.
Output: In each line of output there should be two columns. The first column contain the string and left justified using exactly 15 characters. The second column contain the integer, expressed in exactly 3 digits. If the original input has less than 3 digit you must add your output leading digits with zeroes.
*/
let r:number = 123456;
for(let i:number = 1; i <= r; i++) {
    let s1:string = "Maks Void";
    let x:number = 987654;
    let s2:string = s1;
    let temp:string = x.toString();
    for(let j:number = s1.length; j <= 14; j++) {
        s2 += " ";
    }
    if(temp.length === 3) console.log(s2 + temp);
    else if(temp.length === 2) console.log(s2 + "0" + temp);
    else if(temp.length === 1) console.log(s2 + "00" + temp);
}