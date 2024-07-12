/*Question to Print 1 to N numbers using any Looping technique*/
import java.util.Scanner;
public class Test20	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Range : ");
		int n = in.nextInt();

		for(int i = 1; i <= n; i++)	System.out.println(i);
	}
}