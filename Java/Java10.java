//Boolean Logical Operator
public class Java10 {
    public static void main(String args[]){
        //Or Operator
        System.out.println("true | true : "+(true | true));
        System.out.println("true | false : "+(true | false));
        System.out.println("false | true : "+(false | true));
        System.out.println("false | false : "+(false | false));
        //And Operator
        System.out.println("true & true : "+(true & true));
        System.out.println("true & false : "+(true & false));
        System.out.println("false & true : "+(false & true));
        System.out.println("false & false : "+(false & false));
        //XOR Operator
        System.out.println("true ^ true : "+(true ^ true));
        System.out.println("true ^ false : "+(true ^ false));
        System.out.println("false ^ true : "+(false ^ true));
        System.out.println("false ^ false : "+(false ^ false));
        //NOR Operator
        System.out.println("!(true | true) : "+!(true | true));
        System.out.println("!(true | false) : "+!(true | false));
        System.out.println("!(false | true) : "+!(false | true));
        System.out.println("!(false | false) : "+!(false | false));
        //NAND Operator
        System.out.println("!(true & true) : "+!(true & true));
        System.out.println("!(true & false) : "+!(true & false));
        System.out.println("!(false & true) : "+!(false & true));
        System.out.println("!(false & false) : "+!(false & false));
        //XNOR Operator
        System.out.println("!(true ^ true) : "+!(true ^ true));
        System.out.println("!(true ^ false) : "+!(true ^ false));
        System.out.println("!(false ^ true) : "+!(false ^ true));
        System.out.println("!(false ^ false) : "+!(false ^ false));
        //NOT Operator
        System.out.println("!true = "+(!true));
        System.out.println("!false = "+!(false));
    }
}