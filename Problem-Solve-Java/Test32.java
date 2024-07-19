/*Write a program to return the reverse of a number n = 123 output = 321*/
import java.util.Scanner;
public class Test32	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Num : ");
		int n = in.nextInt();
		int rev = 0;

		while(n != 0)	{
			int rem = n % 10;
			rev = (rev * 10) + rem;
			n /= 10;
		}
		System.out.println(rev);
	}
}