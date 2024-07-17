/*Write a program to print the digits of a number. N = 153 Output = 3 5 1*/
import java.util.Scanner;
public class Test30	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Num : ");
		int n = in.nextInt();
	
		while(n != 0)	{
			int rem = n % 10;
			System.out.println(rem);
			n /= 10;
		}
	}
}