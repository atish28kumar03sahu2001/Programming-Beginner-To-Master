public class Java15 {
    public static void main(String args[]) {
        int num1 = 0B00001101;
        System.out.println("num1 : "+num1);

        int num2 = 0b00001111;
        System.out.println("num2 : "+num2);

        int oc1 = 0127;
        System.out.println("oc1 : "+oc1);

        int oc2 = 0256;
        System.out.println("oc2 : "+oc2);

        int hex1 = 0xAD9;
        System.out.println("hex1 : "+hex1);

        int hex2 = 0XBAC;
        System.out.println("hex2 : "+hex2);

        int il1 = 12_34_56_78_90;
        System.out.println("li1 : "+il1);

        char ch1 = '\u0048';
        System.out.println("ch1 : "+ch1);

        boolean bol1 = true;
        System.out.println("bol1 : "+bol1);

        String str1 = "MAKS VOID";
        System.out.println("str1 : "+str1);

        Object nu = null;
        System.out.println("nu : "+nu);
    }
}