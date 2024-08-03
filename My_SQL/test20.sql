/*
List of Date formats in My SQL
Day: %d(01 to 31)	%e(0 to 31) 	%D(st, nd, rd, th)	%j(001 to 366)
Month: %M(January to December)		%b(jan to dec)		%m(00 to 12)	%c(0 to 12)
Year: %Y(ex: 2019) 	%y(0 to 12)		Week: %a(mon)	%W(MONDAY)	%w(01 to 06)
*/

select date_format("2021-11-08 12:47:52.112233","%d-%m-%y");
select date_format("2024-08-11 03:04:25.223344","%e-%b-%y");
select date_format("2089-05-06 09:10:11.334564","%D-%M-%Y");
select date_format("2036-08-11 03:04:25.223344","%j-%c-%y");

select date_format("2024-08-11 03:04:25.223344","%a");
select date_format("2128-12-12 03:04:25.223344","%W");
select date_format("2024-08-11 03:04:25.223344","%w");

/*
List Of Time Format In My SQL
HOUR: %h(01-12) %H(00-23)
MINUTES: %i(00-59) SECONDS: %s(00-59)	MICROSECONDS: %f(000000 - 999999)
MERIDIEM: %p(am or pm)
*/

select date_format("2021-11-8 12:47:45.123456","%h:%i:%s:%f:%p");
select date_format("2021-11-8 10:47:45.123456","%H:%i:%s:%f:%p");

select time_format("12:47:45.123456","%h:%i:%s:%f:%p");
select time_format("10:47:45.123456","%H:%i:%s:%f:%p");