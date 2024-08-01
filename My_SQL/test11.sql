use test1;
create table student (id bigint, sname varchar(50), roll bigint, age bigint, branch varchar(50));
insert into student (id, sname, roll, age, branch) values 
(1,"sname1",1,18,"CSE"),(2,"sname2",2,19,"MECH"),(3,"sname3",3,20,"ELEC"),
(4,"sname4",4,18,"CSE"),(5,"sname5",5,19,"MECH"),(6,"sname6",6,20,"ELEC"),
(7,"sname7",7,18,"CSE"),(8,"sname8",8,19,"MECH"),(9,"sname9",9,20,"ELEC");

select * from student;

alter table student modify age int;
alter table student add gender varchar(10);
insert into student (id, sname, roll, age, branch, gender) values 
(10,"sname10",10,18,"CSE","male"),(11,"sname11",11,19,"MECH","female"),(3,"sname3",3,20,"ELEC","male");
alter table student change age sage int;
alter table student modify roll bigint after sage;
alter table student drop column gender;
alter table student rename studb;
select * from studb;

-- describe command will describe about table details
describe student;

-- Drop command used for to delete the whole table. Truncate command used to delete all data of the table
truncate studb;
drop table studb;