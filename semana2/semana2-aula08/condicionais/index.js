//Exercicios de Interpretação de Códigos

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")

// //a) Explique o que o código faz. Qual o teste que ele realiza? 

// //b) Para que tipos de números ele imprime no console "Passou no teste"? 

// //c - Para que tipos de números a mensagem é "Não passou no teste"? 

// // 2 - 

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) - Para que serve o codigo acima, 
//b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// O preço da fruta, maçã, é R$ 2.25
//c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no 
//console se retirássemos o `break`que está logo acima do `default` 
//(o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
//imprime tudo que vem logo em seguida

// //3 - 
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//a) O que a primeira linha está fazendo? esta solicitando uma informação ao usuario,
//e ja transformando essa entrada em numero
//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? 
//E se fosse o número -10? esse numero passou no teste
//c) havera algum erro no console, 

// Escrita de Código

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console 
// se ele/ela pode dirigir (apenas maiores de idade).

//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para
//      number para isso.

//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
//     Se sim imprima no console `"Você pode dirigir"`, caso contrário, 
//     imprima `"Você não pode dirigir."`

function idadeUsuario=Number(prompt("Insira sua idade")
const numero = Number(idadeUsuario)
 
if (numero>=18 ) {
  console.log("Você pode dirigir!")
} else {
  console.log("Você não pode dirigir")
