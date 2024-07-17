/*Write a program using only while loops to print all the even numbers from 1 to n*/
import java.util.Scanner;
public class Test27	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Num : ");
		int n = in.nextInt();

		int i = 1;
		while(i <= n)	{
			if(i % 2 == 0)	System.out.println(i);
			i++;
		}
	}
}