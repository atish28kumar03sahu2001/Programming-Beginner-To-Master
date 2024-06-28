//Call
function introd(lang1, lang2) {
    console.log(`Name: ${this.name} and language: ${lang1} & ${lang2}`);
}
const person = {name: "Alice"};
introd.call(person,"English","Spanish");