import java.util.Date;
public class Java31 {
    public static void main(String args[]) {
        Date dt = new Date();
        System.out.println("getTime() : "+dt.getTime());

        long oneHr = dt.getTime() + 3600000;
        dt.setTime(oneHr);
        System.out.println("setTime() : "+dt);

        Date date1 = new Date();
        Date date2 = new Date(date1.getTime() + 10000);
        boolean isBefore = date1.before(date2);
        System.out.println("before() : "+isBefore);

        Date date3 = new Date(date1.getTime() - 10000);
        boolean isAfter = date1.after(date3);
        System.out.println("after() : "+isAfter);
    }
}