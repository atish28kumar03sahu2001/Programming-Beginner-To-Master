/*there are many needy people who need some money are standing in a row. the person who stands at ith position need i * i rs money. you have X rs. and you want to fulfil the needs of people. when you donate the money to any people it is deducted from x. you have to find how many peoples can fulfil their needs by your money.
input: 14	output: 3		input: 35	output: 4
*/

import java.util.Scanner;
public class Test62	{
	public static long func(long ip)	{
		if(ip <= 0)	return 0;
		long count = 0, i = 1;
		while(ip >= i * i)	{
			ip -= i * i;
			count++;
			i++;
		}
		return count;
	}
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);

		System.out.println("Enter Input : ");
		long ll = in.nextLong();

		long op = func(ll);
		System.out.println("OP : "+op);
	}
}