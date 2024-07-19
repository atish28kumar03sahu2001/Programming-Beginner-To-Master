/*Sum Of All Number From 1 to N*/
import java.util.Scanner;
public class Test37	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Num : ");
		int n = in.nextInt();
		int count = 0;
		for(int i = 1; i <= n; i++)	{
			count += i;
		}
		System.out.println("Sum : "+count);
	}
}