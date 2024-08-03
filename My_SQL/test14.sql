-- Not Operator
select (not true) as test;
select (not false) as test;

-- And Operator
select (true and true) as test;
select (true and false) as test;
select (false and true) as test;
select (false and false) as test;

-- Nand Operator
select ((not true) and true) as test;
select ((not true) and false) as test;
select ((not false) and true) as test;
select ((not false) and false) as test;

-- Or Operator
select (true or true) as test;
select (true or false) as test;
select (false or true) as test;
select (false or false) as test;

-- Nor Operator
select ((not true) or true) as test;
select ((not true) or false) as test;
select ((not false) or true) as test;
select ((not false) or false) as test;

-- ExOr Operator
select (true ^ true) as test;
select (true ^ false) as test;
select (false ^ true) as test;
select (false ^ false) as test;

-- ExNor Operator
select ((not true) ^ true) as test;
select ((not true) ^ false) as test;
select ((not false) ^ true) as test;
select ((not false) ^ false) as test;