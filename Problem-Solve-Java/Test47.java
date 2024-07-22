/*HCM & LCM Of Two Number*/
import java.util.Scanner;
public class Test47	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Num1 : ");
		int num1 = in.nextInt();
		System.out.println("Enter Num2 : ");
		int num2 = in.nextInt();

		int a = num1, b = num2, t, HCF, LCM;
		while(b != 0)	{
			t = b;
			b = a % b;
			a = t;
		}
		HCF = a;
		LCM = (num1 * num2) / HCF;

		System.out.println("LCM : "+LCM);
		System.out.println("HCF : "+HCF);
	}
}
