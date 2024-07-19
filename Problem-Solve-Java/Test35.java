/*Write a program to print all the numbers from 1 to n .If m is present in between the sequence then stop printing any other number and break out of the loop.*/
import java.util.Scanner;
public class Test35	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Num : ");
		int n = in.nextInt();
		System.out.println("Enter Range : ");
		int m = in.nextInt();

		for(int i = 1; i <= n; i++)	{
			if(i == m)	break;	
			System.out.println(i);
		}
	}
}