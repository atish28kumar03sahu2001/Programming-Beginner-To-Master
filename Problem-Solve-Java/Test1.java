/*
Your mission is to create a program that, when executed, will print the phrase "Hello Java Program" to the console.
Your program should output a single line containing the greeting "Hello Java Program".
*/
public class Test1	{
	public void print () {
		System.out.println("Hello Java Program");
	}
	public static void main(String args[])	{
		Test1 t = new Test1();
		t.print();
	}
}