use test1;
create table usersdetail(username varchar(50));
insert into usersdetail values 
("ABCD"),("EFGH"),("IJKL"),("MNOP"),("QRST"),("UVWX"),
("YZAB"),("CDEF"),("GHIJ"),("KLMN"),("OPQR"),("STUV"),
("WXYZ"),("QWER"),("TYUI"),("OPAS"),("DFGH"),("JKLZ"),
("XCVB"),("NMQW"),("ERTY"),("UIOP"),("ASDF"),("GHJK"),
("LZXC"),("VBNM"),("QWER"),("TYUI"),("OPAS"),("DFGH");
select * from usersdetail;
select * from usersdetail where username regexp "^A";
select * from usersdetail where username regexp "AB$";
select * from usersdetail where username regexp "[AI]";
select * from usersdetail where username regexp "^[DT]";
select * from usersdetail where username regexp "[A-B]";
select * from usersdetail where username regexp "AB|AS";
select * from usersdetail where username regexp "[AB]C";
select * from usersdetail where username regexp "[A-B]S";