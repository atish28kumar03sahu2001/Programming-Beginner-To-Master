/*You have a collection of n cards, each of which has a number written on it. There are k cards with odd numbers, and the rest are even numbers. Your goal is to divide these cards into chunks in such a way that the sum of numbers in each chunk is odd, and each chunk contains more than one card. You need to determine the maximum number of chunks that can be created under these constraints.
Input: 6 5 	Output: 2	Input: 13	888	Output: -288
*/

import java.util.Scanner;
public class Test64	{
	public static int func(int n, int k)	{
		int even = n - k;
		int count = 0;
		if(k == 0)	{
			return 0;
		}
		if(k > even)	{
			int temp = k;
			count += even;
			temp = temp - even;
			temp = (int)(Math.floor(temp/3));
			count += temp;
		} else {
			count += k;
		}
		return count;
	}
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);

		System.out.println("Enter Num1 : ");
		int num1 = in.nextInt();
		
		System.out.println("Enter Num2 : ");
		int num2 = in.nextInt();

		int output = func(num1, num2);
		System.out.println("output : "+output);
	}
}