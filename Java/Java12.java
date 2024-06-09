//Bit Wise Operator
public class Java12 {
    public static void main(String args[]) {
        System.out.println("15 | 10"+(15 | 10));
        System.out.println("15 & 10"+(15 & 10));
        System.out.println("15 ^ 10"+(15 ^ 10));
        System.out.println("~15 : "+~(15));

        System.out.println("~(15 | 10)"+~(15 | 10));
        System.out.println("~(15 & 10)"+~(15 & 10));
        System.out.println("~(15 ^ 10)"+~(15 ^ 10));
    }
}