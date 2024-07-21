use test1;
create table userdetail ( uid bigint, uname varchar(10), ubranch varchar(10), udob date, ugender varchar(10), uage int, uphone bigint, ucity varchar(20) );
insert into userdetail (uid, uname, ubranch, udob, ugender, uage, uphone, ucity) values 
(100, "ABC", "CSE", "2001-01-01", "male", 18, 1234567890, "Delhi"),
(101, "EFG", "MEC", "2001-01-02", "female", 19, 2563198074, "Mum"),
(102, "HIJ", "CHEM", "2001-01-03","male", 20, 1472639580, "Kol"),
(103, "KLM", "CIVIL", "2001-01-04", "female",18, 1248305697,"Che"),
(104, "NOP", "EEE", "2001-02-12", "male", 18, 8213654970, "Delhi"),
(105, "QRS", "MEC", "2001-02-15", "female", 19, 2561458078, "Mum"),
(106, "TUV", "CSE", "2001-01-03","male", 20, 1248315694, "Kol"),
(107, "WXY", "EEE", "2001-11-15", "female",20, 8213645970,"Che"),
(108, "ZAB", "CSE", "2001-05-12", "male", 18, 1234567890, "Delhi"),
(109, "CDE", "EEE", "2001-06-15", "female", 19, 2563198074, "Mum"),
(110, "FGH", "CHEM", "2001-05-25","male", 20, 1472639580, "Kol"),
(111, "IJK", "CIVIL", "2001-06-14", "female",18, 1248305697,"Che"),
(112, "LMN", "CSE", "2001-05-01", "male", 18, 1234567890, "Delhi"),
(113, "OPQ", "EEE", "2001-06-02", "female", 19, 2563198074, "Mum"),
(114, "RST", "CHEM", "2001-05-13","male", 20, 1472639580, "Kol"),
(115, "UVW", "CIVIL", "2001-06-22", "female",18, 1248305697,"Che");
select * from userdetail;

select * from userdetail where ugender = "male";
select * from userdetail where uage < 19;
select * from userdetail where uage > 19;
select * from userdetail where ubranch != "CSE";

select * from userdetail where ubranch = "CSE" and uage > 18;
select * from userdetail where ubranch = "CSE" or ucity = "Delhi";
select * from userdetail where ubranch not in ("CSE", "EEE") and ugender = "female";
select * from userdetail where ubranch in ("EEE") and uage < 20;
select * from userdetail where uid between 100 and 110 and ugender = "male";
select *  from userdetail where uage not between 19 and 20;