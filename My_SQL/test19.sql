/*
List Of AddUnits In My SQL
adddate & date_add both functionalities are same and list are also same both are add whatever you give.
you can use these list to the subdate also subdate actually subtract whatever you give.
*/
select adddate("2019-06-01",interval 10 day);
select adddate("2019-06-01",interval 15 week);
select adddate("2019-06-01",interval 5 month);
select adddate("2019-06-01",interval 3 quarter);
select adddate("2019-06-01",interval 7 year);

select adddate("2012-12-25 12:25:36",interval 03 hour);
select adddate("2012-12-25 12:25:36",interval 202 minute);
select adddate("2012-12-25 12:25:36",interval 140 second);
select adddate("2012-12-25 12:25:36.123456",interval 177 microsecond);

select adddate("2012-10-07", interval 20 year_month);

select adddate("2016-08-11 02:56:16", interval 15 day_hour);
select adddate("2016-08-11 02:56:16", interval 20 day_minute);
select adddate("2016-08-11 02:56:16", interval 600 second);
select adddate("2016-08-11 02:56:16", interval 500 day_second);
select adddate("2016-08-11 02:56:16.123456", interval 1000 day_microsecond);

select adddate("2056-05-06 06:52:12", interval 25 hour_minute);
select adddate("2056-05-06 06:52:12.556644", interval 2500 hour_microsecond);
select adddate("2056-05-06 06:52:12", interval 25 hour_second);
select adddate("2056-05-06 06:52:12.145236", interval 40 minute_microsecond);
select adddate("2056-05-06 06:52:12.145236", interval 150 second_microsecond);

select date_add("2010-10-10",interval 25 week);
select makedate(2012,2015);
select subdate("2070-07-01", interval 52 day);
select datediff("2300-12-12","2100-12-12");

select to_days("2024-02-08");
select from_days("123456");
select period_add("12345",10);
SELECT PERIOD_DIFF(202312, 202201);

select str_to_date("July 10 2055","%M %d %Y");
select date_sub("2012-12-12",interval 15 week);