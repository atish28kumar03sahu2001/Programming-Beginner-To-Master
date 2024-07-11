/*Fibonacci Series*/
import java.util.Scanner;
public class Test15	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Range : ");
		int r = in.nextInt();
		int n1 = 0;
		int n2 = 1;
		for(int i = 0; i < r; i++){
			System.out.println(n1);
			int temp = n1 + n2;
			n1 = n2;
			n2 = temp;
		}
	}
}