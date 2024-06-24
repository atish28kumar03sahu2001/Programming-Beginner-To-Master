//getter & setter with object
let obj = {
    name: "Maks Void",
    age: 24,
    language: "",
    get getName(){
        return this.name.toUpperCase();
    },
    set lang(nm) {
        this.language = nm;
    }
}
obj.lang = "English";
console.log(obj);