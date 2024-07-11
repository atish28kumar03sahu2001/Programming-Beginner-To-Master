/*Swapping Of Two Number Using Third Variable*/
import java.util.Scanner;
public class Test13	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);

		System.out.println("Enter Num1 : ");
		int num1 = in.nextInt();
		System.out.println("Enter Num2 : ");
		int num2 = in.nextInt();
		System.out.println("Num1 : "+num1+" Num2 : "+num2);

		int swap = num1;
		num1 = num2;
		num2 = swap;
		System.out.println("Num1 : "+num1+" Num2 : "+num2);

		int swap2 = num2;
		num2 = num1;
		num1 = swap2;
		System.out.println("Num1 : "+num1+" Num2 : "+num2);
	}
}