use test1;
create table userdetail (id bigint, name varchar(30), branch varchar(30));
insert into userdetail (id, name, branch) values
(1,"name1","CSE"),(2,"name2","MECH"),(3,"name3","ELEC");
select * from userdetail;

use test1;
alter table userdetail add column email varchar(50) not null default '';
describe userdetail;

insert into userdetail (id, name, branch, email) values
(4,"name4","EEE","name4@mail.com"),(5,"name5","CHEM","name5@mail.com");
select * from userdetail;