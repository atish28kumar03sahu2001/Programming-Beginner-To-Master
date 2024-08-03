-- My SQL String Operations & Function
select upper("maks void");
select ucase("maks void");
select lower("LKS AKS MAKS");
select lcase("MAKS AKS LKS");

select length("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
select char_length("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

select concat("lipun","LIPUN");
select concat_ws("_","lipun","LIPUN");

select ltrim("		LIPUN		"); -- left trim
select rtrim("		LIPUN		"); -- right trim
select trim("		LI P UN		"); -- trim
select trim("#" from "#MAKS");

select position("@" in "MAKS@GMAIL.COM");
select locate("#","maks#2801");
select instr("kumar77lipun","77");

select substring("MERNSTACKVOID",2,6);
select substr("MERNSTACKVOID",2,6);

select mid("ABCDEFGHIJKL",2,4);
select right("abcdefghij",6);
select left("mnopqrstuvwxyz",8);

select substring_index("abcd@efgh@ijkl","@",3);
select lpad("HTMLCSSJSREACTNEXTNODE",10,"ABC");
select rpad("HTMLCSSJSREACTNEXTNODE",10,"ABC");

select space(20);
select reverse("HTMLCSSJSREACTNODE");
select repeat("AB",10);

select replace("HTMLCSSJSREACTNODENEXT","REACT","VOID");
select strcmp("AKS","ATI"); -- str1 = str2 = 0 str1 < str2 = -1 str1 > str2 = 1
select field("A",	"B","C","D","A");

select find_in_set("A",	"B,C,D,E,F,G,H,I,J");
select format(1234567890.123456789,3);
select hex("MAKSVOID");