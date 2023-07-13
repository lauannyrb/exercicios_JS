let firstName = prompt("Digite o seu primeiro nome: ");
let lastName = prompt("Digite o seu sobrenome: ");
let stude = prompt("Nos informe o seu campo de estudo: ");
let date = prompt("Qual o seu ano de nascimento: ");

date = 2023 - date;


var resultado = "O recruta se chama: " + firstName + " " + lastName + ";<br>";
resultado += "O seu campo de estudo é: " + stude + ";<br>";
resultado += "Ele(a) tem " + date + " de idade;";

document.getElementById("resultado").innerHTML = resultado;