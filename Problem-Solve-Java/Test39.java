/*Root Of A Number*/
import java.util.Scanner;

public class Test39 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Num : ");
        int n = in.nextInt();

        System.out.println("Enter Root : ");
	double r = in.nextInt();        

        System.out.println("Root : " + Math.pow(n, 1/r));
    }
}

