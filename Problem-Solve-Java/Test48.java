/*Factor Of A Number*/
import java.util.Scanner;
public class Test48	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Num : ");
		int num = in.nextInt();

		for(int i = 1; i < num; i++)	{
			if(num % i == 0)	System.out.println(i);
		}
	}
}