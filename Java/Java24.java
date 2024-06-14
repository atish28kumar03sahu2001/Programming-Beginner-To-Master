public class Java24 {
    public static void main(String args[]) {
        for(int i = 10; i <= 20; i++){
            if(i == 15) break;
            System.out.println(i);
        }
        for(int j = 20; j <= 30; j++){
            if(j == 25) continue;
            System.out.println(j);
        }
    }
}