import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
public class Java33 {
    public static void main(String args[]){
        LocalDate spdt = LocalDate.of(2024, 6, 18);
        System.out.println("LocalDate.of() : "+spdt);

        LocalTime sptm = LocalTime.of(14,30);
        System.out.println("LocalTime.of() : "+sptm);

        LocalDateTime spdttm = LocalDateTime.of(2024,6,20,12,12);
        System.out.println("LocalDateTime.of() : "+spdttm);

        LocalDateTime currentDateTime = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedDateTime = currentDateTime.format(formatter);
        System.out.println("Formatted Date and Time: " + formattedDateTime);

        LocalDateTime futureDateTime = currentDateTime.plusDays(10);
        System.out.println("Date and Time after 10 days: " + futureDateTime);

        LocalDateTime pastDateTime = currentDateTime.minusHours(5);
        System.out.println("Date and Time 5 hours ago: " + pastDateTime);
    }
}