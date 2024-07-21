use test1;
create table person (id bigint, per varchar(40));
insert into person (id, per) values 
(1,null),(2,"abcd"),(3,null),(4,"aswd"),(5,"lkji"),(6,null),(7,null);
select * from person;
select * from person where per is null;
select * from person where per is not null;