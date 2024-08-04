/*
MYSQL UNION AND UNION ALL
1. each select statement within union must have the same number of columns.
2. the columns must also have similar data types.
3. the columns in each select statement must also be in the same order.
*/
use test1;
create table table4 (id bigint, name varchar(10), roll int, city varchar(10));
insert into table4(id, name, roll, city) values
(1,"name1",1,"city1"), (2,"name2",2,"city2"), (3,"name3",3,"city3"), (4,"name4",4,"city4"),
(5,"name5",5,"city1"), (6,"name6",6,"city2"), (7,"name7",7,"city3"), (8,"name8",8,"city4");
select * from table4;

create table table5 (id bigint, name varchar(10), roll int, city varchar(10));
insert into table5(id, name, roll, city) values
(9,"name9",9,"city1"), (10,"name10",10,"city2"), (11,"name11",11,"city3"), (12,"name12",12,"city4"),
(13,"name13",13,"city1"), (14,"name14",14,"city2"), (15,"name15",15,"city3"), (16,"name16",16,"city4");
select * from table5;

select name, city from table4 union select name, city from table5;
select name, city from table4 union all select name, city from table5;

select name, city from table4 where city = "city2" union all select name, city from table5 where city = "city1";
select name, city from table4 where city = "city4" union all select name, city from table5 where city = "city4";