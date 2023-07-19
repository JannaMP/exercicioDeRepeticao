let prompt = require('prompt-sync') ();

let numero = prompt("Digite um numero:")

while (numero >= 0) {
    console.log(numero)
    numero--
}
