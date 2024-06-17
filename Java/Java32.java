import java.util.Date;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;
public class Java32 {
    public static void main(String args[]) {
        Date dt1 = new Date();
        Date dt2 = new Date(dt1.getTime());
        int comparison = dt1.compareTo(dt2);
        System.out.println(comparison);

        LocalDate crdt = LocalDate.now();
        System.out.println("current Date : "+crdt);

        LocalTime crtm = LocalTime.now();
        System.out.println("Current Time : "+crtm);

        LocalDateTime crdttm = LocalDateTime.now();
        System.out.println("Current Date Time : "+crdttm); 
    }
}