/*Reverse Number*/
import java.util.Scanner;
public class Test45	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Num : ");
		int num = in.nextInt();
		int count = 0;
		while(num != 0)	{
			int rem = num % 10;
			count = (count * 10) + rem;
			num /= 10;
		}
		System.out.println("Reverse Number : "+count);
	}
}