use test1;
create table table1(id bigint, name varchar(50), branch varchar(50));
insert into table1(id, name, branch) values
(1,"name1","CSE"),(2,"name2","MECH"),(3,"name3","ELEC"),
(4,"name4","EEE"),(5,"name5","CHEM"),(6,"name6","CIVIL");
select * from table1;

-- Update Command;
update table1 set branch = "CSE" where name = "name6";
select * from table1;

update table1 set branch = "MECH" where id = 3;
select * from table1;

-- Delete Command
delete from table1 where name = "name1";
select * from table1;

delete from table1 where id = 4;
select * from table1;