let prompt = require('prompt-sync') ();

let idade = prompt("Digite sua idade:")


while( idade < 18) {
    idade = prompt("Digite sua idade:")
}

console.log("Maior de idade!")


/*
let idade;

do{
    idade = prompt("Digite sua idade: ")

    if (idade <= 17) {
    }

} while (idade < 18)
console.log("Maior de idade!")
*/

