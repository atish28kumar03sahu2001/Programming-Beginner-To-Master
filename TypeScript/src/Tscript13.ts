//Utility Type In TypeScript
//Partial<Type>
type User = {
    name: string,
    email: string
}
type User1 = Partial<User> 

//Required<Type> - opposite of partial
type User2 = {
    name?: string, email?: string
}
type User3 = Required<User2>
const Useru : Required<User2> = {
    name: "AKS",
    email: "AKS@MAIL.COM"
}

//Readonly<Type> - makes every property readonly 
type User4 = {
    name: string, 
    email: string
}
const Useru1: Readonly<User4> = {
    name: "AKS",
    email: "AKS@MAIL.COM"
}

//Record<Keys, Type>
interface UserInfo{
    age: number;
}
type UserNamei = "john" | "viky" | "Maks" | "Monty"
const Users: Record <UserNamei, UserInfo> = {
    john: {age: 22},
    viky: {age: 25},
    Maks: {age: 21},
    Monty: {age: 23}
}

//Pick<Type, Keys>
type OrderInfo =  {
    readonly id:string,
    user:string,
    city:string,
    state:string,
    country:string,
    status:string
}
type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">;

//Omit<Type, Keys>
interface ShippingInfo1 {
    city:string,
    state:string,
    country:string,
    status:string
}
type Random = Omit<ShippingInfo1, "country">

//Exclude<Type, ExcludedUnion>
type union = string | number | boolean
type Random1 = Exclude<union, boolean>

//Extract<Type, Union>
type union1 = string | number | boolean;
type Random2 = Extract<union1, boolean>

//NonNuLLable<Type>
type union2 = string | number | boolean | null | undefined;
type Random3 = NonNullable<union1>;

//Parameters<Type>
const myFunc = (a:number, b:string) => {
    console.log(a + b);
}
type Random4 = Parameters<typeof myFunc>

//ConstructorParameters<Type>
class SampleClass {
    constructor(public s:string, public t:string){}
}
type Random5 = ConstructorParameters<typeof SampleClass>

//ReturnType<Type>
const myFunc1 = (a:number, b:string): string => {
    return a + b;
}
type funcTypeq = ReturnType<typeof myFunc1>

//InstanceType<Type>
class SampleClass1 {
    constructor(public s:string, public t:string){}
}
type Random6 = InstanceType<typeof SampleClass1>
const user5:Random6 = {
    s: "SSS",
    t: "TTTT"
}