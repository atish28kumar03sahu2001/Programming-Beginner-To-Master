/*Compute the natural logarithm of 2 by adding up to n terms in the series 1 – ½ + 1/3 – ¼ + 1/5 - ……….. 1/n where n is a positive integer and input by user.*/

import java.util.Scanner;
public class Test63	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		double sum = 0;
		System.out.println("Enter Num : ");
		int n = in.nextInt();

		for(int i = 1; i <= n; i++)	{
			if(i % 2 == 1)	sum += 1.0 / i;
			else sum -= 1.0 / i;
		}
		System.out.println("Output : "+sum);
	}
}