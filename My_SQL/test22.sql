/*Primary key always has unique data. A primary key can not have null value. A table can contain only one primary key constraints.
Foreign key is used to link two tables together. A foreign key in one table used to point primary key in another table.*/
use test1;
create table city(
	cid bigint not null auto_increment,
    cityname varchar(50) not null,
    primary key(cid)
);
insert into city (cityname) values 
("DELHI"),("MUMBAI"),("PUNE"),("KOLKATA"),("CHENNAI"),("BANGLORE"),("PUNJAB");
select * from city;

create table employee(
	empid bigint not null,
    empname varchar(50) not null,
    empage int not null check(empage >= 20),
    empcity bigint not null,
    primary key(empid), foreign key(empcity) references city(cid)
);
insert into employee (empid, empname, empage, empcity) values
(1,"name1", 20, 1),(2,"name2", 21, 2),(3,"name3", 22, 3),(4,"name4", 23, 4),
(5,"name5", 20, 5),(6,"name6", 21, 6),(7,"name7", 22, 7),(8,"name8", 23, 1),
(9,"name9", 20, 2),(10,"name10", 21, 3),(11,"name11", 22, 4),(12,"name12", 23, 5),
(13,"name13", 20, 6),(14,"name14", 21, 7),(15,"name15", 22, 1),(16,"name16", 23, 2),
(17,"name17", 20, 3),(18,"name18", 21, 4),(19,"name19", 22, 5),(20,"name20", 23, 6),(21,"name21", 23, 7);
select * from employee;