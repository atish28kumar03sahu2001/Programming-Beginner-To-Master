/*Print Even & Odd Number From Specific Range*/
import java.util.Scanner;
public class Test9	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);

		System.out.println("Enter Range1 : ");
		int r1 = in.nextInt();

		System.out.println("Enter Range2 : ");
		int r2 = in.nextInt();

		for(int i = r1; i <= r2; i++)	{
			if(i % 2 == 0)	System.out.println(i);
		}
		System.out.println("---------------------------");
		for(int i = r1; i <= r2; i++)	{
			if(i % 2 != 0)	System.out.println(i);
		}
	}
}