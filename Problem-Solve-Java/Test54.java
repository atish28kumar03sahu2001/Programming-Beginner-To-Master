/*
Input: Every line of input will contain a string followed by an integer. Each string will have a maximum of 10 alphabetic characters and each integer will be in the inclusive range from 0 to 999.
Output: In each line of output there should be two columns. The first column contain the string and left justified using exactly 15 characters. The second column contain the integer, expressed in exactly 3 digits. If the original input has less than 3 digit you must add your output leading digits with zeroes.
*/
import java.util.Scanner;
public class Test54	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Range : ");
		int r = in.nextInt();

		for(int i = 1; i <= r; i++)	{
			String s1 = in.next();
			int x = in.nextInt();
			String s2 = s1;
			String temp = Integer.toString(x);
			
			for(int j = s1.length(); j <= 14; j++)	{
				s2 += " ";
			}
			if(temp.length() == 3)	System.out.println(s2 + temp);
			else if(temp.length() == 2)	System.out.println(s2 +"0"+ temp);
			else if(temp.length() == 1)	System.out.println(s2 + "0" + "0" + temp);
		}
	}
}