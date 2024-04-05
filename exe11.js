/*
11. Crie uma lógica para calcular a idade de uma pessoa. Essa lógica deverá receber um valor de ano de nascimento no formato “yyyy-MM-dd” e deverá retornar o número da idade da pessoa como resultado.
*/

const { differenceInYears } = require('date-fns');

function calcularIdade(dataNascimento) {
  let idade = differenceInYears(new Date(), new Date(dataNascimento));
  return idade;
}

// Exemplo de uso da função para calcular a idade
let dataDeNascimento = "1990-05-15";
let idadeAtual = calcularIdade(dataDeNascimento);
console.log("A idade atual da pessoa é: " + idadeAtual + " anos");
