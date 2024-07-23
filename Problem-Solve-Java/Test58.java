/*
Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
Input: n = 00000000000000000000000000001011 decimal = 11		Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
Input: n = 00000000000000000000000010000000 decimal = 128		Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
*/
import java.util.Scanner;
public class Test58	{
	public static int func(int n)	{
		String binary = Integer.toBinaryString(n);
		int count = 0;
	
		for(int i = 0; i< binary.length(); i++)	{
			if(binary.charAt(i) == '1')	{
				count++;
			}
		}
		return count;
	}
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Input : ");
		int n = in.nextInt();

		int output = func(n);
		System.out.println("Output : "+output);
	}
}