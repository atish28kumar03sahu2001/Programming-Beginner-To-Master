/*Join Multiple Tables*/
use test1;
create table table1(
	regno bigint, tname varchar(50),
    branch bigint,
    city bigint,
    primary key(regno),
    foreign key(branch) references table2(branchid),
    foreign key(city) references table3(cityid)
);

create table table2(
	branchid bigint, branchname varchar(50), primary key(branchid)
);

create table table3(
	cityid bigint, cityname varchar(50), primary key(cityid)
);

insert into table2(branchid, branchname) values
(1,"CSE"), (2,"MECH"), (3,"CHEM"), (4,"CIVIL"), (5,"ELEC"), (6,"EEE"), (7, "IT");
select * from table2;

insert into table3 (cityid, cityname) values
(1,"DELHI"), (2,"PUNE"), (3,"CHENNAI"), (4,"MUMBAI"), (5,"KOLKATA"), (6, "BANGLORE");
select * from table3;

insert into table1(regno, tname, branch, city) values 
(1, "tname1",1,1),(2, "tname2",2,2),(3, "tname3",3,3),(4, "tname4",4,4),(5, "tname5",5,5),
(6, "tname6",6,6),(7, "tname7",7,1),(8, "tname8",1,2),(9, "tname9",2,3),(10, "tname10",3,4),
(11, "tname11",4,5),(12, "tname12",5,6),(13, "tname13",6,1),(14, "tname14",7,2);
select * from table1;

select * from table1 inner join table2 on table1.branch = table2.branchid inner join table3 on table1.city = table3.cityid;
select regno, tname, branchname, cityname from table1 inner join table2 on table1.branch = table2.branchid inner join table3 on table1.city = table3.cityid;
select regno, tname, branchname, cityname from table1 inner join table2 on table1.branch = table2.branchid inner join table3 on table1.city = table3.cityid order by regno asc;