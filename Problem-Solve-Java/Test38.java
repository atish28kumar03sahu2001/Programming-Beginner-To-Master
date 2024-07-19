/*Power Function*/
import java.util.Scanner;
import java.math.*;
public class Test38	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Num : ");
		int n = in.nextInt();
		System.out.println("Enter Power : ");
		int p = in.nextInt();
		System.out.println("Power : "+Math.pow(n, p));
	}
}