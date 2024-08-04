/*
MYSQL GROUP BY AND HAVING CLAUSE: The group by clause is used in conjunction with the select statement and aggregate functions to group rows together by common column values.
*/
use test1;
select empcity, count(empcity) from employee group by empcity;

select city.cityname, count(employee.empcity) as total from employee inner join city
on employee.empcity = city.cid group by empcity;

select city.cityname, count(employee.empcity) as total
from employee inner join city on employee.empcity = city.cid
group by empcity having count(employee.empcity) >= 1;