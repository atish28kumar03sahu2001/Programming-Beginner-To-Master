/*Print the following series using for loop:- 1,8,27,64,125,216,......n*/
import java.util.Scanner;
public class Test33	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Range : ");
		int r = in.nextInt();

		for(int i = 1; i*i*i <= r; i++)	{
			System.out.println(i*i*i);
		}
	}
}