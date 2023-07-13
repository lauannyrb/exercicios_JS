/* 
## Visitando Novas Cidades

Escreva um programa em javascript que peça o nome de um turista e então pergunte 
se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade 
e o armazene em uma variável, e então continue perguntando se o turista visitou alguma 
outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, 
quantas e quais cidades ele visitou.
*/

const nome = prompt("Qual o seu nome?");

let pergunta = prompt("Você já visitou alguma cidade? (s/n)");
let cidades = [];

while (pergunta === "s") {
  let nomeCidades = prompt("Qual o nome da cidade que você visitou?");
  cidades.push(nomeCidades);
  pergunta = prompt("Você visitou alguma outra cidade? (s/n)");
}

alert(`Turista: ${nome};\nNúmero de cidades visitadas: ${cidades.length};\nNome das cidades visitadas: ${cidades.join(", ")};`);
