/*Write a program to print even numbers from 1 to n except numbers which are divisible by 4. Use Continue statement to avoid printing.*/
import java.util.Scanner;
public class Test34	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Range : ");
		int r = in.nextInt();

		for(int i = 1; i <= r; i++)	{
			if(i % 2 == 0)	{
				if(i % 4 != 0)	{
					System.out.println(i);
				}
			}
		}
	}
}