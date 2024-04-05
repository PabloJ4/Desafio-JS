/*
1. Imagine que você está criando um sistema escolar para obter a média dos alunos da sala. Foram realizadas 3 avaliações com nota máxima de 10 pontos. Aline, tirou na primeira nota o total de 8 pontos, na segunda nota tirou 9 pontos e na terceira nota 7 pontos. 

Escreva um programa que receba as notas, faça o cálculo da média e imprima o resultado final da média.
*/
let aluno = "Aline";
let primeiraNota = 8;
let segundaNota = 9;
let terceiraNota = 7;

let media = (primeiraNota + segundaNota + terceiraNota) / 3;

console.log(`A media final do aluno(a) ${aluno} é ${media}.`);