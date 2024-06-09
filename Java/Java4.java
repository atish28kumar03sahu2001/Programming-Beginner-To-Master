class test {
    public void print() {
        System.out.println("Print Funtion Called");
    }
}
interface test1 {
    public void print1();
}
public class Java4 implements test1{
    public void print1(){
        System.out.println("Print1 Function Called");
    }
    public static void main(String args[]) {
        test t = new test();
        t.print();

        Java4 obj = new Java4();
        obj.print1();
    }
}