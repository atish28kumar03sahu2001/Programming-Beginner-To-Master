/*The task is to find the nth number in the Fibonacci series.*/
import java.util.Scanner;
public class Test22	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Range : ");
		int r = in.nextInt();

		int n1 = 0;
		int n2 = 1;
		int res = 0;
		for(int i = 0; i < r; i++)	{
			res = n1;
			int temp = n1 + n2;
			n1 = n2;
			n2 = temp;
		}
		System.out.println(res);
	}
}