/*Compute the factorial of a given number using a loop.*/
import java.util.Scanner;
public class Test26	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Num : ");
		int n = in.nextInt();
		int fact = 1;
		for(int i = 1; i <= n; i++)	{
			fact *= i;
		}
		System.out.println(fact);
	}
}