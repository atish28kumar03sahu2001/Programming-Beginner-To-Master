//Data Signature
interface person{
    [key:string]: string;
}
const myObj1:person = {
    name: "MAKS VOID",
    email: "MAKSVOID@MAIL.COM",
}
const getName = ():string => {
    return myObj1["name"];
}
const getEmail = ():string => {
    return myObj1["email"];
}
const GetDatap = (key: string): string => {
    return myObj1[key]
}
console.log(getName(), getEmail());
console.log(GetDatap("name"));
console.log(GetDatap("email"));