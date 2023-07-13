let num1 = parseFloat(prompt("Digitel o primeiro valor: "));
let num2 = parseFloat(prompt("Digitel o segundo valor: ")); 

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1/num2;

alert("Valor 1: " + num1);
alert("Valor 2: " + num2);

console.log(num1 + " + " + num2 + " = " + soma);
console.log(num1 + " - " + num2 + " = " + subtracao);
console.log(num1 + " * " + num2 + " = " + multiplicacao);
console.log(num1 + " / " + num2 + " = " + divisao);


document.getElementById("resultadoSoma").textContent = (num1 + " + " + num2 + " = " + soma);
document.getElementById("resultadoSubtracao").textContent = (num1 + " - " + num2 + " = " + subtracao);
document.getElementById("resultadoMultiplicacao").textContent = (num1 + " * " + num2 + " = " + multiplicacao);
document.getElementById("resultadoDivisao").textContent = (num1 + " / " + num2 + " = " + divisao);