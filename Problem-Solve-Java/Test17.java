/*Write a program to print the largest of the three numbers.*/
import java.util.Scanner;
public class Test17	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Num1 : ");
		int num1 = in.nextInt();
		System.out.println("Enter Num2 : ");
		int num2 = in.nextInt();
		System.out.println("Enter Num3 : ");
		int num3 = in.nextInt();

		if(num1 > num2 && num1 > num3)	System.out.println(num1+" Is Greatest");
		else if(num2 > num1 && num2 > num3) System.out.println(num2+" Is Greatest");
		else System.out.println(num3+ "Is Greatest");
	}
}