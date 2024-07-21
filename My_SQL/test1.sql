-- Create A Database
create database test1;

-- Use A Database
use test1;

-- Create A Table Command
create table candidate(
	croll bigint,
    cname varchar(50),
    cgender varchar(10),
    cdob date
);

-- Insert Data In A Table
insert into candidate(croll, cname, cgender, cdob)
values 
(1, "Maks Void", "Male", "2001-03-28"),
(2, "Lipun Sahu", "Male", "2000-05-15"),
(3, "Sarita Dash", "Female", "2001-08-08"),
(4, "Monika Yen", "Female", "2001-09-18");

-- Show the table data 
select * from candidate;