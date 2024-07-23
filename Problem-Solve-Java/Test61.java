/*You have numCoconuts coconut shells that are initially full of water. You can exchange numExchange empty coconut shells from the market with one full coconut shell of water. The operation of drinking a full of water turns it into an empty coconut shell. Given the two integers numCoconuts and numExchange return the maximum number of coconut shells of water you can drink. Input: numCoconuts = 9	numExchange = 3	output: 13*/

import java.util.Scanner;
public class Test61	{
	public static int func(int n1, int n2)	{
		int total = n1, empty = n1;
		while(empty >= n2)	{
			int temp = empty / n2;
			total += temp;
			empty = temp + empty % n2;
		}
		return total;
	}
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);

		System.out.println("Enter Input1 : ");
		int ip1 = in.nextInt();

		System.out.println("Enter Input2 : ");
		int ip2 = in.nextInt();

		int output = func(ip1, ip2);
		System.out.println("Output : "+output);
	}
}