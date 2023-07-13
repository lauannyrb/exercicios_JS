/*
## Robô da Tabuada

Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número 
(de 1 a 20). O programa deve começar pedindo o número a ser usado nos cálculos e então salvar 
todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável
do tipo string. Depois o programa deve exibir esses resultados e finalizar.

*/

let numero = 0;
let tabuada = "";

while (true) {
  numero = parseInt(prompt("Qual o número entre 1 e 20 deseja obter a tabuada: "));

  if (numero >= 1 && numero <= 20) {
    for (let i = 1; i <= 20; i++) {
      let resultado = numero * i;
      tabuada += `${numero} x ${i} = ${resultado}\n`;
    }

    alert(`Tabuada de ${numero}:\n${tabuada}`);
    break;
  } else {
    alert("Número inválido. Por favor, digite um número entre 1 e 20.");
  }
}


