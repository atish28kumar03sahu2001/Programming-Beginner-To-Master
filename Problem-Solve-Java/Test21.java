/*Print all odd numbers between 1 to N using any loop.*/
import java.util.Scanner;
public class Test21	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);

		System.out.println("Enter Range : ");
		int r = in.nextInt();
		for(int i = 1; i<= r; i++)	{
			if(i % 2 != 0)	System.out.println(i);
		}
	}
}