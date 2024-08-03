-- My SQL Arithmetic Function
select 50 + 60 as total;
select 70 - 30 as total; 
select 12 * 5 as total;
select 98 / 13 as total;
select 98 div 13 as total;
select 84 % 5 as total;
select 84 mod 5 as total;

select pi();
select rand();

select round(4.2);
select round(6.7);

select round(1234.251,2);
select round(rand() * 100);

select ceil(1.22);
select floor(58.8);
select floor(7 + (rand() * 6));

select pow(2,3); /*(base, exponent)*/
select sqrt(66);

select abs(-48);
select abs(55);
select abs(52.33);

select sign(65);
select sign(-11);
select sign(0);

select round(degrees(1.0));

-- Trigonometry Function
select degrees(pi());
select round(sin(pi()/2));
select round(cos(pi()/2));
select round(tan(pi()/2));
select round(cot(pi()/2));

select round(asin(pi()/2));
select round(acos(1));
select round(atan(1));
select round(atan2(90));
select round(atan2(90,180));