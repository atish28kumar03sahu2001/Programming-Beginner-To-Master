-- List Of Parameter With Extract Function In My SQL
select extract(day from "2001-12-25");
select extract(week from "2001-12-25");
select extract(month from "2001-12-25");

select extract(quarter from "2001-12-25");
select extract(year from "2001-12-25");
select extract(year_month from "2001-12-25");

select extract(hour from "10:25:34");
select extract(minute from "10:25:34");
select extract(second from "10:25:34");

select extract(hour_second from "10:25:34");
select extract(day_minute from "2003-11-10 10:25:34");
select extract(day_hour from "2003-11-10 10:25:34");
select extract(day_second from "2003-11-10 10:25:34");
select extract(microsecond from "10:25:34.011223"); -- 0 to 999999

select extract(minute_microsecond from "06:45:22.6623");
select extract(minute_second from "06:45:22");
select extract(hour_microsecond from "12:52:50.123456");