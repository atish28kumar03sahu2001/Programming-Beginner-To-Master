/*Print the following series using while loop 1 4 9 16 25 36 …. n*/
import java.util.Scanner;
public class Test28	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Range : ");
		int n = in.nextInt();

		int i = 1;
		while(i <= n)	{
			int res = i * i;
			if(res > n)	break;
			System.out.println(res);
			i++;
		}
	}
}