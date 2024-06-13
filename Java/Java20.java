public class Java20 {
    void get(){
        Java20 obj1 = new Java20();
        System.out.println("Val2: "+obj1);
    }
    public static void main(String args[]){
        Java20 obj = new Java20();
        System.out.println("Val1 : "+obj);

        obj.get();
    }
}