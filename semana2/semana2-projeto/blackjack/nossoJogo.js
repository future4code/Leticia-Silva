/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
   
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
   //1 - Imprime uma mensagem no console "Boas vindas ao jogo de Blackjack!".

      console.log ("Boas vindas ao jogo de Blackjack!")

   //  confirm é um comando que cria uma caixa com dois botões: ok e cancelar, permitindo
   //  fazer perguntas de "sim" e "não". Caso o usuário responda sim (ok) o comando devolve 
   //o valor true, caso contrário, devolve false. Desta forma, podemos usar condicionais 
   //para decidir o que fazer em cada caso
   
  //2 - Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?".
  //3 - Se o usuário responder `cancel`, imprime uma mensagem no console "O jogo acabou".
  //4 - Se o usuário responder `Ok`, o programa deve iniciar uma nova rodada.

   if(confirm("Quer iniciar uma nova rodada?")) {
	// o que fazer se o usuário clicar "ok"
   cartaUsuario = comprarCarta()
   cartaComputador = comprarCarta()
   
   console.log(cartaUsuario.texto) 
   console.log(cartaUsuario.valor) 
   console.log(cartaComputador.texto)
   console.log(cartaComputador.valor)


}else {
	// o que fazer se o usuário clicar "cancelar"
   console.log ("O jogo acabou")
}




   // console.log(cartaComputador) = `Computador - cartas: ${cartaComputador.texto} 
   // - pontuação ${cartaComputador.valor}`





