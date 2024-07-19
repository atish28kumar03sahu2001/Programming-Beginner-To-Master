/*Sum Of All Odd & Even Number From 1 to N*/
import java.util.Scanner;
public class Test36	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Num : ");
		int n = in.nextInt();
		int ce = 0, co = 0;
		for(int i = 1; i <= n; i++)	{
			if(i % 2 == 0)	ce += i;
			else	co += i;
		}
		System.out.println("Even : "+ce+" Odd : "+co);
	}
}