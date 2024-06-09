//Conditional Operator
public class Java11 {
    public static void main(String args[]) {
        //Conditional OR
        System.out.println("true || true : "+(true || true));
        System.out.println("true || false : "+(true || false));
        System.out.println("false || true : "+(false || true));
        System.out.println("false || false : "+(false || false));
        //Conditional And
        System.out.println("true && true : "+(true && true));
        System.out.println("true && false : "+(true && false));
        System.out.println("false && true : "+(false && true));
        System.out.println("false && false : "+(false && false));
        //Conditional Nor
        System.out.println("!(true || true) : "+!(true || true));
        System.out.println("!(true || false) : "+!(true || false));
        System.out.println("!(false || true) : "+!(false || true));
        System.out.println("!(false || false) : "+!(false || false));
        //Conditional Nand
        System.out.println("!(true && true) : "+!(true && true));
        System.out.println("!(true && false) : "+!(true && false));
        System.out.println("!(false && true) : "+!(false && true));
        System.out.println("!(false && false) : "+!(false && false));
    }
}