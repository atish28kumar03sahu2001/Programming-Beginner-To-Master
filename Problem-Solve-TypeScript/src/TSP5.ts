/*
Design a program to assign grades to students based on the following criteria:
- Students scoring less than or equal to 50 should be awarded a "D" grade.
- Students scoring above 50 but below 60 should receive a "C" grade.
- Students with marks between 60 to 75 should be assigned a "B" grade.
- Students scoring greater than 75 should be granted an "A" grade.
Input: Scores: 45, 58, 70, 80
Output: D C B A
*/
let func5 = (score: number) => {
    if(score <= 50) console.log("D");
    else if(score > 50 && score < 60) console.log("C");
    else if(score > 60 && score < 75) console.log("B");
    else console.log("A");
}
func5(72);
func5(53);