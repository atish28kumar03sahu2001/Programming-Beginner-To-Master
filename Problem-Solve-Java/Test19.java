/*If Marks> =40 --> pass	ELSE ---> fail use ternary operator*/
import java.util.Scanner;
public class Test19	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Num : ");
		int num = in.nextInt();

		String res = (num >= 40) ? "Pass" : "Fail";
		System.out.println(res);
	}
}