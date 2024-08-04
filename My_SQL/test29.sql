/*My SQL If & Case Clause*/
use test1;
create table stu(roll bigint, name varchar(20), percentage int);
insert into stu (roll, name, percentage) values
(1,"name1",40),(2,"name2",45),(3,"name3",50),(4,"name4",55),(5,"name5",60),
(6,"name6",65),(7,"name7",70),(8,"name8",75),(9,"name9",80),(10,"name10",85),
(11,"name11",90),(12,"name12",95),(13,"name13",40),(14,"name14",45),(15,"name15",50),
(16,"name16",55),(17,"name17",60),(18,"name18",65),(19,"name19",70),(20,"name20",75),
(21,"name21",80),(22,"name22",85),(23,"name23",90),(24,"name24",95);
select *  from stu;

select roll, name, percentage, if(percentage >= 55, "PASS","FAIL") as result from stu;

SELECT roll, name, percentage, 
CASE
	WHEN percentage >= 90 AND percentage <= 100 THEN 'A'
	WHEN percentage >= 60 AND percentage <= 90 THEN 'B'
	WHEN percentage >= 45 AND percentage <= 60 THEN 'C'
	WHEN percentage >= 40 AND percentage <= 45 THEN 'FAIL'
	ELSE 'invalid one'
END AS RESULT 
FROM stu;

update stu set
percentage = (case roll
when 3 then 65
when 7 then 82
end) where roll in (3,7);
select *  from stu;