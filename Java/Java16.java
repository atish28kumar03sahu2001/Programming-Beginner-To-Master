public class Java16 {
    public static void main(String args[]) {
        byte num1 = 127;
        System.out.println("num1 : "+num1);

        short num2 = num1;
        System.out.println("num2 : "+num2);

        int num3 = num2;
        System.out.println("num3 : "+num3);

        long num4 = num3;
        System.out.println("num4 : "+num4);

        float num5 = num4;
        System.out.println("num5 : "+num5);

        double num6 = num5;
        System.out.println("num6 : "+num6);

        double NUM1 = 123.0;
        System.out.println("NUM1 : "+NUM1);

        float NUM2 = (float)NUM1;
        System.out.println("NUM2 : "+NUM2);

        long NUM3 = (long)NUM2;
        System.out.println("NUM3 : "+NUM3);

        int NUM4 = (int)NUM3;
        System.out.println("NUM4 : "+NUM4);

        short NUM5 = (short)NUM4;
        System.out.println("NUM5 : "+NUM5);

        byte NUM6 = (byte)NUM5;
        System.out.println("NUM6 : "+NUM6);
    }
}