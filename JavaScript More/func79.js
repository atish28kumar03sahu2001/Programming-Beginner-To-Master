//Function Method
function greet(greeting, punctuation){
    console.log(greeting+','+this.name+punctuation);
}
const person = {name:"Alice"};
//bind
const greetAlice = greet.bind(person,'Hello');
greetAlice('!');

//call
greet.call(person,'Hi','.');

//apply
greet.apply(person,['Hey','!']);