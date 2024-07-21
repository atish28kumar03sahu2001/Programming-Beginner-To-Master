use test1;
create table data (id bigint, name varchar(10));
insert into data (id, name) values 
(1,"a"),(2,"b"),(3,"c"),(4,"d"),(5,"e"),(6,"f"),
(7,"g"),(8,"h"),(9,"i"),(10,"j"),(11,"k"),(12,"l");
select * from data;
select * from data limit 6;
select * from data limit 3, 2;

select count(id) from data;
select max(id) from data;
select min(id) from data;
select avg(id) from data;
select sum(id) from data;