/*By using while loop and continue statement Print all number from 1 to n but then it should not be divisible by 5*/
import java.util.Scanner;
public class Test29 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
	System.out.println("Enter Range : ");
        int r = in.nextInt();

        int i = 1;
        while(i <= r) {
            if(i % 5 == 0) {
                i++;
                continue;
            }
            System.out.println(i);
            i++;
        }
    }
}