/*My SQL JOINS
Left Join: The left join returns all records from the left table(table1) and the matched records from the right table(table2).
Right Join: The right join returns all records from the right table(table2) and the matched records from the left table(table1).
Cross Join: A cross join in MySQL, also known as a Cartesian join, is a type of join that returns the Cartesian product of the two tables being joined. 
*/
use test1;
select empname, cityname from employee left join city on employee.empcity = city.cid;

select empname, cityname from employee right join city on employee.empcity = city.cid;
select empname, cityname from employee right join city on employee.empcity = city.cid order by employee.empname desc;

select * from employee cross join city;