public class Java17 {
    int a  = 10;
    long b = 123456;
    public static void main(String args[]) { 
        Java17 j = new Java17();
        System.out.println("A : "+j.a);
        j.func1();
    }
    void func1() {
        System.out.println("B : "+b);
    }
}