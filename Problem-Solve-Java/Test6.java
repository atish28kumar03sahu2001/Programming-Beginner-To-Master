/*Perform Arithmetic Operation*/
import java.util.Scanner;
public class Test6	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);

		System.out.println("Enter Num1 : ");
		int num1 = in.nextInt();

		System.out.println("Enter Num2 : ");
		int num2 = in.nextInt();

		System.out.println("Enter Choice : ");
		int choice = in.nextInt();

		switch(choice)	{
			case 1 : 
				System.out.println(num1 + "+" + num2 + ":" + (num1 + num2));
				break;
			case 2 :
				System.out.println(num1 + "-" + num2 + ":" + (num1 - num2));
				break;
			case 3 :
				System.out.println(num1 + "*" + num2 + ":" + (num1 * num2));
				break;
			case 4 :
				System.out.println(num1 + "/" + num2 + ":" + (num1 / num2));
				break;
			case 5 :
				System.out.println(num1 + "%" + num2 + ":" + (num1 % num2));
				break;
			default :
				System.out.println("Invalid Option!");
				break;
		}
	}
}