/*Swapping Of Two Number Without Using Third Variable*/
import java.util.Scanner;
public class Test14	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Num1 : ");
		int num1 = in.nextInt();
		System.out.println("Enter Num2 : ");
		int num2 = in.nextInt();

		System.out.println("Num1 : "+num1+" Num2 : "+num2);

		num1 = num1 + num2;
		num2 = num1 - num2;
		num1 = num1 - num2;
		System.out.println("Num1 : "+num1+" Num2 : "+num2);

		num2 = num2 + num1;
		num1 = num2 - num1;
		num2 = num2 - num1; 
		System.out.println("Num1 : "+num1+" Num2 : "+num2);
	}
}