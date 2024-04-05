/*
6. Escreva um programa para encontrar o fatorial do número 12.
*/

function fatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

let numero = 12;
let resultadoFatorial = fatorial(numero);
console.log("O fatorial de", numero, "é", resultadoFatorial);
