//Interpretação de código
// 1 - Leia o código abaixo

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])
// a - o que será impresso no console?  1- Matheus Nachtergaele, 
//2- não entendi, 3- Globo 14h

// 2 - Leia o código abaixo

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

//a) O que vai ser impresso no console? juca,juba, jubo
//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//faz uma cópia do objeto ou acessa algumas propriedades

// 3- Leia o código abaixo:

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console? caio, backender e caio, undefined não entendi

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu? não
// falso e undefined 

//Exercicios de escrita de código
//1 -
// a) Crie um objeto. 
// Ele deve conter duas propriedades: 
// nome (string) e apelidos 
// (um array que sempre terá exatamente três apelidos). 
// Depois, escreva uma função que recebe como entrada um objeto 
// e imprime uma mensagem no modelo abaixo: 

// Exemplo de entrada
// const pessoa = {
//     nome: "Amanda", 
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
//  }
 
//  // Exemplo de saída
//  "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

// const meuNome = {
//         nome:"Leticia",
//         apelidos: ["Leti","Letima","Lele"]
// }
//         const frase =
//         `Eu sou ${meuNome.nome}, mas pode me chamar de: ${meuNome.apelidos}`

//     console.log (frase)

// 
// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor 
//da propriedade nome, mas com uma nova lista de três apelidos. 
//Depois, chame a função feita no item anterior passando como argumento o novo objeto

const meuNome={
         nome:"Leticia",
         apelidos: ["Leti","Letima","Lele"]

        
     }
             const frase =
             `Eu sou ${meuNome.nome}, mas pode me chamar de: ${meuNome.apelidos}`
    
         console.log (frase)

        
         

// 2 - 
// a -  Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão

    // const dadosPessoa={
    //     nome: "Maria"
    //     idade: 25
    //     profissao: "professora"




 


