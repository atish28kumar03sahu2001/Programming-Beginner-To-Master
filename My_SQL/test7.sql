use test1;
create table student (id bigint, name varchar(50), city varchar(50));
insert into student values 
(1,"qaz","dc"),(2,"wsx","mi"),(3,"edc","kkr"),(4,"rfv","csk"),(5,"tgb","rcb"),
(6,"yhn","srh"),(7,"ujm","gt"),(8,"ikl","rr"),(9,"opq","pbks"),(10,"wsa","lsb"),
(11,"sda","dc"),(12,"edf","mi"),(13,"swd","kkr"),(14,"sxa","csk"),(15,"sxv","rcb"),
(16,"gpo","srh"),(17,"lmr","gt"),(18,"bhz","rr"),(19,"lkn","pbks"),(20,"bhd","lsb"),
(21,"hbi","dc"),(22,"jap","mi"),(23,"mgh","kkr"),(24,"buq","csk"),(25,"ijz","rcb"),
(26,"bhu","srh"),(27,"paq","gt"),(28,"nvb","rr"),(29,"mof","pbks"),(30,"noa","lsb");
select * from student;
select * from student order by name asc;
select * from student order by name desc;
select * from student where city in ("csk","rcb") order by name asc;
select distinct city from student;