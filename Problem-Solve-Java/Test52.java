import java.util.Scanner;
public class Test52	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		System.out.println("Enter Num : ");
		int num = in.nextInt();
	
		if(num % 2 != 0)	System.out.println("weird");
		else if(num >= 2 & num <= 5)	System.out.println("not weird");
		else if(num >= 6 & num <= 20)	System.out.println("weird");
		else	System.out.println("not weird");
	}
}
/*
Given an integer n perform the following conditional actions. If n is odd print weird. If n is even and in this inclusive range of 2 to 5 print not weird. If n is even and in this inclusive range of 6 to 20 then print weird. If n is even and greater than 20 print or not weird.
*/