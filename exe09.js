/*
9. Em um jogo de RPG, o personagem do jogador possui pontos de vida (HP) que são reduzidos quando ele sofre danos dos inimigos. Seu personagem começa com 100 pontos de vida e sofre danos de 20 pontos em um ataque. Crie um algoritmo informando quantos pontos de vida restarão após três ataques?
*/


//Definindo a função.
function vidaTotal(pontosDeVida, danoSofridoPorAtaque, numeroDeAtaques){
    let lifeRestante = pontosDeVida - (danoSofridoPorAtaque*numeroDeAtaques);

    return lifeRestante;
}





//variaveis apresentadas

let pontosDeVida = 100;
let danoSofridoPorAtaque = 20;
let numeroDeAtaques = 3;

// Chamando a função.
let vidaRestante = vidaTotal(pontosDeVida,danoSofridoPorAtaque,numeroDeAtaques);

// Imprimindo o HP  final do personagem.

console.log("Levei " + numeroDeAtaques + " ataques e fiquei com " + vidaRestante +" pontos de vida.");

