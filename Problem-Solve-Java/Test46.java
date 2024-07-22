/*Palindrome Number: 121 === 121*/
import java.util.Scanner;
public class Test46	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Number : ");
		int num = in.nextInt();

		int NUM = num, count = 0;
		while(num != 0)	{
			int rem = num % 10;
			count = (count * 10) + rem;
			num /= 10;
		}
		if(NUM == count)	System.out.println(NUM+" Is Palindrome Number");
		else 	System.out.println(NUM+" Is Not Palindrome Number");
	}
}