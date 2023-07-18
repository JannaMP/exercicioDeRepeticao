let prompt = require('prompt-sync') ()

//while menos recomendado para esse caso
/*let numero = parseFloat(prompt("Informe um numero:"))

while(numero != 0){ //enquanto meu numero for diferente de 0
    numero = parseFloat(prompt("Digite um numero"))
}*/


// do while (melhor pois n escreve duas vezes)

let numero;

do {
   numero = parseFloat(prompt("Digite um numero"))
} while(numero != 0)



