/*
4. Em uma pequena vila, o fazendeiro precisa separar os números primos para determinar quantos novos campos plantar. Ele pede sua ajuda para identificar esses números criando um algoritmos. Os números são: 23, 16, 11, 8, 19, 14, 5, 21.

*/

let numeros = [23, 16, 11, 8, 19, 14, 5, 21];
let nuPrimos = numeros.filter(numero => {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return numero > 1;
});

console.log(nuPrimos);