-- Time Function In My SQL

select current_time();
select curtime();

select current_timestamp();
select localtime();
select localtimestamp();

select time("2012-01-12 10:14:55");
select hour("2012-01-12 10:14:55");
select minute("2012-01-12 10:14:55");
select second("2012-01-12 10:14:55");
select microsecond("2012-01-12 10:14:55.123456");

select timestamp("2012-01-12","10:14:55");
select timediff("10:14:55","07:25:52");

select addtime("2012-01-12 10:14:55.231456","12:05:123789");
select subtime("2012-01-12 10:14:55.231456","12:05:123789");

select maketime(16,15,45);
select sec_to_time("123456");
select time_to_sec("01:55:42");