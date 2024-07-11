/*Find Age Of The User*/
import java.util.Scanner;
import java.time.*;
public class Test12	{
	public static void main(String args[])	{
		Scanner in = new Scanner(System.in);
		LocalDate DT = LocalDate.now();

		int day = DT.getDayOfMonth();
		int month = DT.getMonthValue();
		int year = DT.getYear();

		System.out.println("Current Day : "+day);
		System.out.println("Current Month : "+month);
		System.out.println("Current Year : "+year);
		System.out.println("-------------------------------------");
		System.out.println("Your Birth Day : ");
		int Day = in.nextInt();
		System.out.println("Your Birth Month : ");
		int Month = in.nextInt();
		System.out.println("Your Birth Year : ");
		int Year = in.nextInt();

		int age = day - Day;
		int mon = month - Month;
		int yr = year - Year;

		if(age < 0)	{
			int sol1 = (-1)*(age);
			System.out.println("Day : "+sol1);
		}
		else	{
			System.out.println("Day : "+age);
		}
		if(mon < 0)	{
			int sol2 = (-1) * (mon);
			System.out.println("Month : "+sol2);
		}
		else	{
			System.out.println("Month : "+mon);
		}
		System.out.println("Year : "+yr);
		System.out.println("-------------------------------------");
	}
}