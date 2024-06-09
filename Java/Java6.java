/*
Post Increment (num++)  Post Decrement (num--)
First Store The Value Then Operation
*/
public class Java6 {
    public static void main(String args[]) {
        int num1 = 10;
        System.out.println("num1 : "+num1);
        int num2 = num1++;
        System.out.println("num2 : "+num2);
        System.out.println("num1 : "+num1);

        int num3 = 20;
        System.out.println("num3 : "+num3);
        int num4 = num3--;
        System.out.println("num4 : "+num4);
        System.out.println("num3 : "+num3);
    }
}