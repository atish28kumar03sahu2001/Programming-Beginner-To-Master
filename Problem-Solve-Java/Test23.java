/*Calculate the sum of all numbers between 1 and N (inclusive) that are multiples of a given integer X.*/
import java.util.Scanner;
public class Test23	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Range : ");
		int r = in.nextInt();
		System.out.println("Enter Multiple : ");
		int x = in.nextInt();

		int sum = 0;
		for(int i = 1; i <= r; i++)	{
			if(i % x == 0)	sum += i;
		}
		System.out.println(sum);
	}
}