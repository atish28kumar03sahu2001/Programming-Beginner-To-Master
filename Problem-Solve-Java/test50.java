/*Perfect Square Number*/
import java.util.Scanner;
import java.math.*;
public class Test50	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Num : ");
		int num = in.nextInt();
		
		if(Math.ceil((double)Math.sqrt(num)) == Math.floor((double)Math.sqrt(num)))
			System.out.println("Perfect Square Number");
		else
			System.out.println("Not Perfect Square Number");
	}
}