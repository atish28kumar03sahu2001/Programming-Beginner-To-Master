//GENERICS IN TYPESCRIPT
const funcc = <CustomType>(n:CustomType): CustomType => {
    return n;
}
const funr1 = funcc(20);
const funr2 = funcc("20");
const funr3 = funcc(true);

type p = {
    name:string,
    age:number,
}
const funcc1 = <CustomType>(n:CustomType): CustomType => {
      return n;
}
const p11:p = {
    name:"ppp",
    age: 26,
}
const ans = funcc1(p11);
const ans1 = funcc1<p>(p11);

const arrr: number[] = [];
const arrr1:Array<number> = []

const funcc2  = <T, U>(n: T, o: U): {n:T, o:U} => {
    return {n,o};
}
const answer1 = funcc2<number,string>(20, "llll");

const funcc3  = <T, U extends T>(n: T, o: U): {n:T, o:U} => {
    return {n,o};
}
const answer2 = funcc3<number,number>(20,50);

type p1 = {
    name:string, age:number,
}
type p2 = {
    name:string, age:number, email:string
}
const per1:p1 = {
    name:"per11",
    age: 55,
}
const per2:p2 = {
    name:"per22",
    age: 85,
    email: "per22@mail.com"
}
const funcc4  = <T, U extends T>(n: T, o: U): {n:T, o:U} => {
    return {n,o};
}
const answer3 = funcc4<p1,p2>(per1, per2);


type pers1 = {
    name:string, age:number,
}
const users:pers1[] = [
    {
        name:"p1",
        age:100,
    },
    {
        name:"p2",
        age:105,
    },
    {
        name:"p3",
        age:110,
    },
    {
        name:"p4",
        age:115,
    },
]
const filterByPeople = <T, KEY extends keyof T > (arr: T[], property:KEY,value:T[KEY]): T[] => {
    return arr.filter(item=>item[property] === value)
};
const filterPeople = filterByPeople(users,"name","p3");
console.log(filterPeople);

const filterAge = filterByPeople(users,"age",115);
console.log(filterAge);