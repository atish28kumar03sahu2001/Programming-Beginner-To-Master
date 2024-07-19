/*Write a program to print whether a given number is an Armstrong number or not. N = 153 Output: true*/
import java.util.Scanner;
public class Test31	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Num : ");
		int n = in.nextInt();
		int N = n, res = n, rem = 0, count = 0, sum = 0;

		while(n != 0)	{
			rem = n % 10;
			count++;
			n /= 10;
		}
		while(N != 0)	{
			int rem1 = N % 10;
			sum += Math.pow(rem1, count);
			N /= 10;
		}
		if(sum == res)	System.out.println(true);
		else System.out.println(false);
	}
}