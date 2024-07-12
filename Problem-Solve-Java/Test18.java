/*
0 through 100 : 5.00, More than 100 but no more than 500 : 8.00
more than 500 but less than 1000 : 10.00, 1000, or more : 12.00
*/
import java.util.Scanner;
public class Test18	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Num1 : ");
		int num1 = in.nextInt();

		if(num1 >= 0 && num1 <= 100) System.out.println("5.00");
		else if(num1 >= 100 && num1 <= 500) System.out.println("8.00");
		else if(num1 >= 500 && num1 <= 1000) System.out.println("10.00");
		else System.out.println("12.00");
	}
}