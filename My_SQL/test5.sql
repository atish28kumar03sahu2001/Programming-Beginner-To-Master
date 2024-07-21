use test1;
create table users (userid bigint, username varchar(50));
insert into users(userid, username) values 
	(1,"ABCD"),(2,"EFGH"),(3,"IJKL"),(4,"MNOP"),(5,"QRST"),(6,"UVWX"),
    (7,"YZAB"),(8,"CDEF"),(9,"GHIJ"),(10,"KLMN"),(11,"OPQR"),(12,"STUV"),
    (13,"WXYZ"),(14,"ABCD"),(15,"EFGH"),(16,"IJKL"),(17,"MNOP"),(18,"QRST"),
    (19,"UVWX"),(20,"YZAB");
select * from users;
select * from users where username like "A%";
select * from users where username like "%B";
select * from users where username like "%C%";
select * from users where username like "A%D";
select * from users where username like "_J%";
select * from users where username like "__C%";
select * from users where username like "_NO%";