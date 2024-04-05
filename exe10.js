/*
10. Desenvolver um programa para contar o número de letras maiúsculas da string abaixo: “LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY”
*/

// Definindo a string
let texto = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";

// Inicializando o contador de letras maiúsculas
let contadorMaiusculas = 0;

// Iterando sobre cada caractere na string
for (let i = 0; i < texto.length; i++) {
    // Verificando se o caractere é uma letra maiúscula
    if (texto[i] === texto[i].toUpperCase() && texto[i] !== texto[i].toLowerCase()) {
        contadorMaiusculas++;
    }
}

// Imprimindo o número de letras maiúsculas na string
console.log("O número de letras maiúsculas na string é: " + contadorMaiusculas);
