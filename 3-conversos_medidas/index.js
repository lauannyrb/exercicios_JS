/*Conversor de Medidas

Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

- milímetro (mm)
- centímetro (cm)
- decímetro (dm)
- decâmetro (dam)
- hectômetro (hm)
- quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso) */



let metros = parseFloat(prompt("Digite um valor em METROS: "));

alert("Aqui estão as opções de conversão: \n1. Milímetro (mm)\n2. Centímetro (cm)\n3. Decímetro (dm)\n4. Decâmetro (dam)\n5. Hectômetro (hm)\n6. Quilômetro (km)\n");

let opcao = parseInt(prompt("Digite o número da opção desejada:"));

switch (opcao) {
    case 1:
      let milimetros = metros * 1000;
      console.log(metros + " metros equivalem a " + milimetros + " milímetros.");
      break;
    case 2:
      let centimetros = metros * 100;
      console.log(metros + " metros equivalem a " + centimetros + " centímetros.");
      break;
    case 3:
      let decimetros = metros * 10;
      console.log(metros + " metros equivalem a " + decimetros + " decímetros.");
      break;
    case 4:
      let decametros = metros / 10;
      console.log(metros + " metros equivalem a " + decametros + " decâmetros.");
      break;
    case 5:
      let hectometros = metros / 100;
      console.log(metros + " metros equivalem a " + hectometros + " hectômetros.");
      break;
    case 6:
      let quilometros = metros / 1000;
      console.log(metros + " metros equivalem a " + quilometros + " quilômetros.");
      break;
    default:
      console.log("Opção inválida.");
      break;
  }