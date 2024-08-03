-- My SQL Date Function
select current_date();
select curdate();
select sysdate();
select now();

select date("2022-03-11");
select month("2023-05-12");
select year("2010-11-11");

select monthname("2011-11-25");
select quarter("2001-12-31");
select day("2002-10-10");

select dayofmonth("2003-06-18");
select dayofweek("2003-06-18");
select dayofyear("2003-06-18");
select dayname("2003-06-18");

select week("2003-06-18");
select last_day("2003-06-18");

select weekday("2003-06-18");
select weekofyear("2003-06-18");
select yearweek("2003-06-18");