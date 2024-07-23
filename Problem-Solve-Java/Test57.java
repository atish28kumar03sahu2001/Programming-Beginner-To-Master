/*
Return addition of numbers that are divisible by 7 in the given range.
Input: start = 1, end = 20		Output: 21
Explanation: Here, the numbers divisible by 7 in the range are 7 and 14, and their sum is 21.
input: start = 10, end = 30		Output: 63
Here, the numbers divisible by 7 in the range are 14, 21, and 28, and their sum is 63.
*/
import java.util.*;
public class Test57	{
	public static int func(int s, int e)	{
		int count = 0;
		for(int i = s; i <= e; i++)	{
			if(i % 7 == 0)	{
				count += i;
			}
		}
		return count;
	}
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Starting Range : ");
		int r1 = in.nextInt();
		System.out.println("Enter Ending Range : ");
		int r2 = in.nextInt();
		System.out.println("Enter Result : ");
		int res = func(r1, r2);
		System.out.println(res);
	}
}