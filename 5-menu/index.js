/* 
## Menu Interativo

Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O
programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de 
nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma
das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção
escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar 
acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo 
que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.

*/

const encerrado = false;

while (!encerrado) {
  alert("~~~~~ Menu ~~~~~\n1. Strogonoff;\n2. Pizza frita;\n3. Água com gás;\n4. Açaí;\n5. ENCERRAR");

  let escolha = parseInt(prompt("Digite o número da opção desejada:"));

  switch (escolha) {
    case 1:
      alert("Você escolheu: Strogonoff");
      break;
    case 2:
      alert("Você escolheu: Pizza frita");
      break;
    case 3:
      alert("Você escolheu: Água com gás");
      break;
    case 4:
      alert("Você escolheu: Açaí");
      break;
    case 5:
      alert("Encerrando o programa...");
      encerrado = true;
      break;
    default:
      alert("Opção inválida");
      break;
  }
}
