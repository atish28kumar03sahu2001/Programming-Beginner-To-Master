/*Print all the perfect squares between 1 and N.*/
import java.util.Scanner;
public class Test25	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
	
		System.out.println("Enter Num : ");
		int n = in.nextInt();

		for(int i = 1; i * i <= n; i++)	{
			System.out.println(i * i);
		}
	}
}