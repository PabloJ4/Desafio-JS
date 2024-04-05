/*
7.Em uma loja de conveniência, um cliente comprou três itens e precisa calcular o total da compra. Os preços dos itens são R$ 2,50, R$ 3,75 e R$ 1,99. Crie um algoritmo que retorne o valor total.
*/

function calcularTotalCompra(preco1, preco2, preco3) {
    let total = preco1 + preco2 + preco3;
    return total;
  }
  
  // Definindo os preços dos itens
  let precoItem1 = 2.50;
  let precoItem2 = 3.75;
  let precoItem3 = 1.99;
  
  // Chamando a função para calcular o total da compra
  let totalDaCompra = calcularTotalCompra(precoItem1, precoItem2, precoItem3);
  
  // Imprimindo o total da compra
  console.log("O total da compra é R$" + totalDaCompra);