/*there are three line of output the first contain an integer, second contain a double, third contain a string. the output must be first line print string, second line print double, third line print int.*/
import java.util.Scanner;
public class Test53	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		int num = in.nextInt();
		double d = in.nextDouble();
		in.nextLine();
		String s = in.nextLine();

		System.out.println("String : "+s);
		System.out.println("Double : "+d);
		System.out.println("Int : "+num);
	}
}