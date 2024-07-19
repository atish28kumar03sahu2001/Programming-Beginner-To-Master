/*nCr & nPr of number*/
import java.util.Scanner;
public class Test40	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter N : ");
		int N = in.nextInt();
		System.out.println("Enter R : ");
		int R = in.nextInt();

		int N_R = N-R, temp1 = 1, temp2 = 1, temp3 = 1;
		for(int i = 1; i <= N; i++)	temp1 *= i;
		for(int j = 1; j <= R; j++)	temp2 *= j;
		for(int k = 1; k <= N_R; k++)	temp3 *= k;
		System.out.println("nCr : "+temp1/(temp2 * temp3));
		System.out.println("nPr : "+temp1 / temp3);
	}
}