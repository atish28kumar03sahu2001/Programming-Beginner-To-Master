/*Write a program to print the largest number of the two numbers */
import java.util.Scanner;
public class Test16	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Num1 : ");
		int num1 = in.nextInt();

		System.out.println("Enter Num2 : ");
		int num2 = in.nextInt();

		if(num1 > num2)	System.out.println(num1+" is greater than "+num2);
		else System.out.println(num2+" is greater than "+num1);
	}
}