/*The Number Is Leap Year Or Not*/
import java.util.Scanner;
public class Test10	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);

		System.out.println("Enter Year : ");
		int year = in.nextInt();

		if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
			System.out.println("Leap Year");
		else
			System.out.println("Not Leap Year");
		
	}
}