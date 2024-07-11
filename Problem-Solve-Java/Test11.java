/*Whether The Number Is Positive Or Negative Or 0*/
import java.util.Scanner;
public class Test11	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Number : ");
		int n = in.nextInt();

		if(n > 0)	System.out.println(n+" is a positive number");
		else if (n < 0) System.out.println(n+" is a negative number");
		else System.out.println(n+" is 0");
	}
}