/*
Input: The input consists of a single integer, `n` (-10^9 ≤ n ≤ 10^9), representing the mystical number.
Output: Your mission is to output a message declaring whether the given number is "Even" or "Odd" based on the magical rules set by Arithmos.
Input: 14
Output: Even
*/
public class Test4	{
	public static void checkMagicalEnergy(int n)	{
		if(n % 2 == 0)	System.out.println("Even");
		else System.out.println("Odd");
	}
	public static void checkE(int n)	{
		if ((n & 1) == 0)	System.out.println("Even");
	}
	public static void checkO(int n)	{
		if((n & 1) != 0)	System.out.println("Odd");
	}
	public static void main(String args[])	{
		Test4 t = new Test4();
		t.checkMagicalEnergy(14);
		t.checkE(88);
		t.checkO(35);
	}
}