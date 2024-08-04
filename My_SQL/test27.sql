/*My SQL Subquery With Exists & No Exists*/
use test1;
select tname from table1 where branch = (select branchid from table2 where branchname = "CSE");
select tname from table1 where branch in (select branchid from table2 where branchname in ("CSE","ELEC"));

select tname from table1 where exists (select branchid from table2 where branchname in ("CSE","ELEC"));
select tname from table1 where not exists (select branchid from table2 where branchname in ("CSE","ELEC"));