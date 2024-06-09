public class Java3 {
    enum Level {
        LOW, AVERAGE, HIGH, VERYHIGH,
    }
    public static void main(String args[]) {
        String s = "Mritunjay Atish Kumar Sahu";
        System.out.println("String s : "+s);

        int[] Ar1 = {0,1,2,3,4,5,6,7,8,9};
        for(int i = 0; i < Ar1.length; i++) {
            System.out.print(Ar1[i]+" ");
        }

        Level myvar = Level.AVERAGE;
        System.out.println("\n"+myvar);
    }
}