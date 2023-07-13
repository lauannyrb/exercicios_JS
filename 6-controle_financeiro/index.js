/*## Controle Financeiro

Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro 
disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover 
dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar 
pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente
 o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, 
 porém subtraindo o valor. A opção de sair deve encerrar o programa.*/


 let dinheiroInicial = parseFloat(prompt("Quanto você tem de dinheiro disponível? "));

 while (true) {
   let opcao = parseInt(
     prompt(
       `Dinheiro disponível: R$${dinheiroInicial}\n\nQual operação deseja realizar?\n1 - Adicionar dinheiro;\n2 - Remover dinheiro;\n3 - Sair.\nDigite uma das opções acima (1, 2 ou 3):`
     )
   );
 
   switch (opcao) {
     case 1:
       let adicionar = parseFloat(prompt("Quanto de dinheiro deseja adicionar: "));
       dinheiroInicial += adicionar;
       break;
     case 2:
       let remover = parseFloat(prompt("Quanto deseja remover de dinheiro:"));
       dinheiroInicial -= remover;
       break;
     case 3:
       alert("Encerrando o programa...");
       break;
     default:
       alert("Opção inválida");
       break;
   }
 
   if (opcao === 3) {
     break;
   }
 }
 
 
