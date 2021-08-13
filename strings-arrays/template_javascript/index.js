//Exercicios de Interpretação de Código

//1 - Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

/*
let array
console.log('a. ', array)
// eu preciso referenciar a lista de elementos, 
//imprime erro undefinned

array = null
console.log('b. ', array)
//eu preciso referenciar a lista de elementos, 
//imprime erro null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// pede a quantidade de itens do array, 
//inicia no 0, portanto a resposta eh 10

let i = 0
console.log('d. ', array[i])
// imprime o 3 pois inicia no 0, ele pede o indice 0

array[i+1] = 19
console.log('e. ', array)
//

const valor = array[i+6]
console.log('f. ', valor)
*/


/*
2 - Leia o codigo abaixo

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)


//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

// toda a frase será impressa em maiscula, e as vogais "A" serão substitituidas por "I" e o 
// numero de caracteres da frase 27 e conta os espaços
*/

//Exercicios de Escrita de código

//1 - Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
//Em seguida, Imprima no console a seguinte mensagem:

// O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

//let usuario = prompt("Digite seu nome")
//let emailUsuario = prompt("Digite seu email")

//"Meu nome é " + nome + " e tenho " + idade + " anos" `Meu nome é ${nome} e tenho ${idade} anos
//mais facil e prática usar o template

//console.log(`O e-mail " ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${usuario} )

// 2  - 
//Faça um programa que contenha um array com 5 das suas
// comidas preferidas, armazenado em uma variável. 
//Em seguida, siga os passos:
//a) Imprima no console o array completo

// const minhasComidas = ["strogonoff", "batata frita", "pizza", "lasanha", "massa"]
// console.log(minhasComidas)


//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", 
//seguida por cada uma das comidas, uma embaixo da outra.

//const minhasComidas = ["strogonoff","batata frita","pizza","lasanha","massa"]
//const frase = "Essas são as minhas comidas preferidas"

//console.log(frase) = [`Essas são as minhas comidas preferidas: + ${minhasComidas}`]


