// 01
// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

const prompt = require("prompt-sync")();

// let nomeUsuario = '';
// let senhaUsuario = '';

// while(true)
// {
//     nomeUsuario = prompt("Digite seu nome: ");
//     senhaUsuario = prompt("Digite sua senha: ");
//     console.log();

//     if (nomeUsuario != senhaUsuario)
//     {
//         break;
//     }
//     else
//     {
//         console.log("ERRO... Tente novamente");
//         console.log();
//     }
// }

// -------------------------

// 02
// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Estado Civil: 's', 'c', 'v', 'd';

// let nome = prompt("Digite seu nome: ");
// let idade = +prompt("Digite sua idade: ");
// let salario = +prompt("Digite seu salário: ");
// console.log("Estado Civil: [s = solteiro][c = casado][v = viúvo][d = divorciado]:")
// let estadoCivil = prompt("Digite seu estado civil: ");

// -----------------------

// 03
// Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar.

// let numero;

// while(numero % 2 != 0)
// {
//     numero = +prompt("Digite um nº: ");
// }


// ------------------------

// 04
// Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deve ser repetir até o usuário acertar o número, e a cada palpite deve dizer se o número é maior ou menor que o palpite. No final dele deve escrever na tela que o usuário encontrou o número, e mostrar a quantidade de palpites que foi necessária.

// let numeroAleatorio = 0;;
// let numeroUsuario = 0;

// let palpites = 0;

// while (true)
// {
//     palpites++;
//     numeroAleatorio = Math.floor(Math.random() * 11);
//     numeroUsuario = +prompt("Digite um número entre 0 e 10: ");

//     console.log();
//     console.log("Número sorteado: " + numeroAleatorio);
//     console.log("Número digitado: " + numeroUsuario);
//     console.log();

//     if (numeroUsuario > numeroAleatorio)
//     {
//         console.log(`Número digitado é maior que o sorteado`);
//     }
//     else if(numeroUsuario < numeroAleatorio)
//     {
//         console.log(`Número digitado é menor que o sorteado`);
//     }

//     if (numeroAleatorio === numeroUsuario)
//     {
//         console.log("Você acertou o número, parabéns!!");
//         break;
//     }
//     else
//     {
//         console.log("Você errou o número, que pena! O número era: " + numeroAleatorio);
//     }
//     console.log();
// }

// console.log(`Quantidade de palpites necessários: ${palpites}`);

// console.log();
