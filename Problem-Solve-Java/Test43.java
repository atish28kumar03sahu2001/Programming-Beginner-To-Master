/*Prime Number From 1 To N*/
import java.util.Scanner;
public class Test43 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Range : ");
        int r = in.nextInt();
        for (int i = 1; i <= r; i++) {
            boolean flag = true;
            if (i <= 1) {
                flag = false;
            } else {
                for (int j = 2; j <= Math.sqrt(i); j++) {
                    if (i % j == 0) {
                        flag = false;
                        break;
                    }
                }
            }
            if (flag)
                System.out.println(i);
        }
    }
}