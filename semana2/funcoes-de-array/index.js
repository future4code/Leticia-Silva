// Exercicios de Interpretação de código

//1 - 
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

  //irá retornar no console:
    //  0 nome: "Amanda Rangel", apelido: "Mandi",
    //  1 nome: "Laís Petra", apelido: "Laura" ,
    //  2 nome: "Letícia Chijo", apelido: "Chijo"
    // obbaaaaa....será que consegui..
    // 2 - 
    // const usuarios = [
    //     { nome: "Amanda Rangel", apelido: "Mandi" },
    //     { nome: "Laís Petra", apelido: "Laura" },
    //     { nome: "Letícia Chijo", apelido: "Chijo" },
    //   ]
      
    //   const novoArrayB = usuarios.map((item, index, array) => {
    //      return item.nome
    //   })
      
    //   console.log(novoArrayB)

      // irá retornar:
      // nome: "Amanda Rangel",
      // nome: "Lais Petra",
      // nome: "Leticia Chijo"
      // retorna(depois da verificação): "Amanda Rangel","Lais Petra","Leticia Chijo
      //quase acertei

      // 3 - 
    //   const usuarios = [
    //     { nome: "Amanda Rangel", apelido: "Mandi" },
    //     { nome: "Laís Petra", apelido: "Laura" },
    //     { nome: "Letícia Chijo", apelido: "Chijo" },
    //   ]
      
    //   const novoArrayC = usuarios.filter((item, index, array) => {
    //      return item.apelido !== "Chijo"
    //   })
      
    //   console.log(novoArrayC)
      // irá retornar
      // "Mandi", "Laura"
      // retorna(depois da verificação)
      //nome: "Amanda Rangel", apelido: "Mandi", 
      //nome: "Laís Petra", apelido: "Laura" ,
      //quase
    // Exercicios de Escrita de Código
    // 1 -
      const pets = [
        { nome: "Lupin", raca: "Salsicha"},
        { nome: "Polly", raca: "Lhasa Apso"},
        { nome: "Madame", raca: "Poodle"},
        { nome: "Quentinho", raca: "Salsicha"},
        { nome: "Fluffy", raca: "Poodle"},
        { nome: "Caramelo", raca: "Vira-lata"},
     ]

     //Dado o seguinte array de cachorrinhos que são clientes de um pet shop,
     //operações pedidas nos itens abaixo utilizando as funções de array map 
     //e filter:

     //a) Crie um novo array que contenha apenas o nome dos doguinhos

            // const novoArrayNomeDoguinho = pets.map ((item, index, array) =>{
            //     return item.nome
            // })
            // console.log(novoArrayNomeDoguinho)        
            
    //b) Crie um novo array apenas com os cachorros salsicha

    // const novoArrayDogSalsicha = pets.filter((item,index,array) => {
    //         return item.raca === "Salsicha"
    // })
    // console.log(novoArrayDogSalsicha)

    //Crie um novo array que possuirá mensagens para enviar para todos os 
    //clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom
    // de desconto de 10% para tosar o/a [NOME]!"

    const novoArrayMensagemPoodle = pets. filter((item,index,array)=>{
            return item.raca === "Poodle"
    })

        console.log(novoArrayMensagemPoodle) = `Você ganhou um cupom de de desconto de 10% 
        para tosar o/a ${item.raca}`
        // travei aqui

   // mas hoje consegui fazer mais exercicios e melhorei na leitura do codigo
   



