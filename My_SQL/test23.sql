/*My SQL JOINS
Inner Join: The inner join selects records that have matching values in both tables. 
*/
use test1;
select *  from employee inner join city ON employee.empcity = city.cid;

select empid, empname, empage, cityname from employee inner join city ON employee.empcity = city.cid;

select empid, empname, cityname from employee inner join city on employee.empcity = city.cid where city.cityname = "DELHI";

select empname, empage, cityname from employee inner join city on employee.empcity = city.cid order by employee.empname;