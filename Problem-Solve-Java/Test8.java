/*Print Even & Odd Number From 1 to N*/
import java.util.Scanner;
public class Test8	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);

		System.out.println("Enter Range : ");
		int r = in.nextInt();
		for(int i = 1; i <= r; i++)	{
			if(i % 2 == 0)	System.out.println(i);
		}
		System.out.println("---------------------------");
		for(int i = 1; i <= r; i++)	{
			if(i % 2 != 0)	System.out.println(i);
		}
	}
}