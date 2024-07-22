/*prime number*/
import java.util.Scanner;
public class Test42	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Num : ");
		int num = in.nextInt();
		boolean flag = true;

		if(num <= 1)	{
			flag = false;
		}
		else	{
			for(int i = 2; i <= Math.sqrt(num); i++)	{
				if(num % i == 0)	{
					flag = false;
					break;
				}
			}
		}
		if(flag)	System.out.println("Prime Number");
		else	System.out.println("Not Prime Number");
	}
}