-- Commit is to save all the changes made in the current transaction to the database permanently. When a transaction is successfully completed and you want to make all the changes permanent, you use the COMMIT statement.
-- Rollback is to undo all the changes made in the current transaction and revert the database to its previous state. When a transaction encounters an error or you decide not to proceed with the changes, you use the ROLLBACK statement to discard all changes made during the transaction.
-- Roll back means what we change in our table through code it reverse all the process. Commit means what ever we change in sql to a table it store permanent if we use commit.
-- ROLLBACK USED FOR ONLY INSERT, UPDATE AND DELETE COMMAND.
use test1;
create table table2 (id bigint, name varchar(50), branch varchar(50), age bigint, city varchar(60));
insert into table2 (id, name, branch, age, city) values
(1,"name1","CSE",18,"city1"),(2,"name2","MECH",18,"city2"),(3,"name3","EEE",19,"city2"),
(4,"name4","ELEC",19,"city1"),(5,"name5","CIVIL",18,"city3"),(6,"name6","CHEM",19,"city3");
select * from table2;

update table2 set age = 20 where id = 3;
commit;

update table2 set age = 25 where id = 4;
rollback;

select * from table2;