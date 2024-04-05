/*
8. Em um sistema de biblioteca, é necessário calcular a multa a ser paga por um usuário que atrasou a devolução de um livro. A multa é de R$ 0,50 por dia de atraso. O usuário atrasou a devolução do livro em 7 dias. Crie um algoritmo que faça o cálculo total que o aluno deverá pagar a biblioteca.
*/

function multa_de_Atraso(dias){
    let valor = dias * 0.50;
    return valor;
}


//Definindo os dias e o nome do usuário.

let nome_usuario = "Carlo Alberto";
let dias = 10;


// Chamando a função para calcular o valor da multa.

let totalDaMulta = multa_de_Atraso(dias);

//Imprimido o valot total que o aluno deverá pagar.
console.log("O aluno "+ nome_usuario+ "atrasou a  devolução do livro em "+ dias+" dias.");
console.log("Valor da multa por atraso  é " + totalDaMulta+ "R$");