/*
Design a program to assign grades to students based on the following criteria:
- Students scoring less than or equal to 50 should be awarded a "D" grade.
- Students scoring above 50 but below 60 should receive a "C" grade.
- Students with marks between 60 to 75 should be assigned a "B" grade.
- Students scoring greater than 75 should be granted an "A" grade.
Input: Scores: 45, 58, 70, 80
Output: D C B A
*/
public class Test5	{
	public static void assignGrades(int score)	{
		if(score <= 50)	System.out.println("D");
		else if (score > 50 && score < 60)	System.out.println("C");
		else if (score > 60 && score < 75)	System.out.println("B");
		else 	System.out.println("A");
	}
	public static void main(String args[])	{
		Test5 t = new Test5();
		t.assignGrades(72);
	}
}