/*Generate and print the multiplication tables(only 10) for the numbers 2, 3, and 4  using loops. Each table should be space-separated integers, and each table should start on a new line.*/
public class Test24	{
	public static void main(String args[])	{
		int n1 = 2, n2 = 3, n3 = 4;
		for(int i = 1; i <= 10; i++)	System.out.print(i * n1+" ");
		System.out.println();
		for(int i = 1; i <= 10; i++)	System.out.print(i * n2+" ");
		System.out.println();
		for(int i = 1; i <= 10; i++)	System.out.print(i * n3+" ");
	}
}