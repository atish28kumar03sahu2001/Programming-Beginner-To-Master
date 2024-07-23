/*You are given q queries in the form of a, b, and n for each query, print the series corresponding to the given a, b, and n values as a single line of n space-separated integers.*/
import java.util.*;
public class Test55	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Range : ");
		int q = in.nextInt();
		for(int i = 0; i < q; i++)	{
			int a = in.nextInt();
			int b = in.nextInt();
			int c = in.nextInt();

			for(int j = 0; j < c; j++)	{
				a += b*Math.pow(2, j);
				System.out.println(a+" ");
			}
			System.out.println();
		}
	}
}