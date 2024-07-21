use test1;

-- My SQL Constraints not null, unique, default, check
create table candidate1 (
cid bigint not null unique,
cname varchar(50) not null,
cage int not null check(cage >= 18),
cgender varchar(10) not null,
cphone bigint not null unique,
ccity varchar(50) not null default "Delhi"
);

insert into candidate1 (cid, cname, cage, cgender, cphone, ccity) values
(100, 'name1', 18, 'male', 1234567890, 'Mumbai'),
(101, 'name2', 19, 'female', 0987654321, 'Bangalore');

select * from candidate1;

insert into candidate1 (cid, cname, cage, cgender, cphone) values
(102, 'name3', 18, 'male', 1563249870),
(103, 'name4', 19, 'female', 1478523690);

select * from candidate1;