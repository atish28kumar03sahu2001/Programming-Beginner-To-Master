/*
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator. The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2. 
Input: dividend = 10, divisor = 3	Output: 3  
Input: dividend = 7, divisor = -3		Output: -2
*/
import java.util.Scanner;
public class Test60	{
	public static int func(int n1, int n2)	{
		long ans = (long)n1/(long)n2;
		if(ans > (long)Math.pow(2,31)-1)
			ans = (long)Math.pow(2,31)-1;
		if(ans < (-1)*(long)Math.pow(2,31))
			ans = (long)Math.pow(-2,31);
		return (int)ans;
	}
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Input1 : ");
		int num1 = in.nextInt();

		System.out.println("Enter Input2 : ");
		int num2 = in.nextInt();
		
		int output = func(num1, num2);
		System.out.println("Output : "+output);
	}
}