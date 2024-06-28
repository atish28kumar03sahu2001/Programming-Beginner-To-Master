//Apply
function introd(lang1, lang2) {
    console.log(`Name: ${this.name} and language: ${lang1} & ${lang2}`);
}
const person = {name: "Alice"};
const languages = ["English","Spanish"];

introd.apply(person, languages);