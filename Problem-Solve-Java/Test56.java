/*
In a premier championship series of sports car racing initially the 1st car is ahead of the 2nd car by x meters. After that in every second the 1st car moves ahead by n1 meter and the 2nd car moves ahead n2 meter (in the same direction). the task is to print the number of seconds after which the 2nd car crosses the 1st car. if it is impossible to do so, then print -1.
Input:				Input:
3	value of n1		5	Value of n1
4	value of n2		4	Value of n2
1	value of X			1	Value of X
Output: 2				Output: -1
*/
import java.util.*;
public class Test56	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Num1 : ");
		int n1 = in.nextInt();
		System.out.println("Enter Num2 : ");
		int n2 = in.nextInt();
		System.out.println("Enter Input : ");
		int x = in.nextInt();

		if(n2 <= n1)	System.out.println(-1);
		else {
			int time = x / (n2 - n1);
			System.out.println(time + 1);
		}
	}
}