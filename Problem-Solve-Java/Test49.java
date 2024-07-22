/*Perfect Number*/
import java.util.Scanner;
public class Test49	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Num : ");
		int num = in.nextInt();
		int count = 0;
		for(int i = 1; i < num; i++)	{
			if(num % i == 0)	count += i;
		}
		if(count == num)		System.out.println("Perfect Number");
		else 	System.out.println("Not Perfect Number");
	}
}