/*Sum Of Digit Of A Number*/
import java.util.Scanner;
public class Test44	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Num : ");
		int num = in.nextInt();
		int count = 0;
		while(num != 0)	{
			int rem = num % 10;
			count += rem;
			num /= 10;
		}
		System.out.println("Sum Of Digit : "+count);
	}
}