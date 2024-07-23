/*Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values. Input: n = 5 Output: true Explain: The binary representation of 5 is: 101*/
import java.util.Scanner;
public class Test59	{
	public static boolean func(int n)	{
		int prev = n % 2;
		n /= 2;

		while(n > 0)	{
			int cur = n % 2;
			if(cur == prev)	return false;
			prev = cur;
			n /= 2;
		}
		return true;
	}
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Input : ");
		int n = in.nextInt();

		boolean output = func(n);
		System.out.println("Output : "+output);
	}
}