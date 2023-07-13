/*
## Procurando Palíndromos

Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo.
Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem.
O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem
dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve 
mostrar a palavra lida da esquerda para direita e da direita para esquerda.

*/

let palavra = prompt("Digite uma palavra:").toLowerCase();
let palavraReversa = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraReversa += palavra[i];
}

if (palavra === palavraReversa) {
  alert(`A palavra "${palavra}" é um palíndromo.`);
} else {
  alert(`A palavra "${palavra}" não é um palíndromo.\nLeitura da esquerda para a direita: ${palavra}\nLeitura da direita para a esquerda: ${palavraReversa}`);
}