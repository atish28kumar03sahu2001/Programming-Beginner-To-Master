/*Whether the number is even or odd*/
import java.util.Scanner;
public class Test7	{
	public static void main(String args[])	{
		Scanner in = new Scanner (System.in);
		System.out.println("Enter Number : ");
		int num = in.nextInt();
	
		if(num % 2 == 0)	System.out.println("Even");	
		else 	System.out.println("Odd");
	}
}