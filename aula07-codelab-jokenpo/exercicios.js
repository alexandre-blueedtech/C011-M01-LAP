const prompt = require("prompt-sync")();

// 01
// Faça um programa que peça um número inteiro e crie arrays com:
// Todos os números pares de 0 ao número escolhido
// Todos os números ímpares do 0 ao número escolhido

// let i = 0;
// let impares = [];
// let pares = [];

// let numero = +prompt("Digite um nº: ");

// while(i != numero + 1)
// {

//     if (i % 2 == 0)
//     {
//         pares.push(i);
//     }
//     else
//     {
//         impares.push(i);
//     }

//     i++;
// }

// console.log();
// console.log(`Pares: ${pares}`);
// console.log(`Impares: ${impares}`);
// console.log();


// 02
// Crie um programa em que o usuário escolha a quantidade de notas serem entradas e depois peça e armazene essa quantidade de notas em um array. Ao final imprima a quantidade de alunos APROVADOS (nota >= 7), EM RECUPERAÇÃO (entre 5 e 7) e REPROVADOS (abaixo de 5).

// console.log();

// let qtdNotas = +prompt("Qtd de notas: ");
// let notas = [];

// let qtdAprovados = 0;
// let qtdRec = 0;
// let qtdReprovados = 0;

// let i = 0;

// console.log();
// while(i != qtdNotas)
// {
//     notas[i] = +prompt(`Digite a ${i + 1}ª nota: `);

//     if (notas[i] >= 7)
//     {
//         qtdAprovados++;
//     }
//     else if (notas[i] >= 5)
//     {
//         qtdRec++;
//     }
//     else
//     {
//         qtdReprovados++;
//     }

//     i++;
// }

// console.log();
// console.log("Notas:", notas);
// console.log("Qtd aprovados:", qtdAprovados);
// console.log("Qtd recuperação:", qtdRec);
// console.log("Qtd reprovados:", qtdReprovados);

// console.log();

//03
// Faça um programa que sorteie 20 números de 0 a 100, armazene todos em um array e imprima em ordem crescente.

// let numeroAleatorio = 0;

// let i = 0;
// let numeros = [];
// let numerosOrdenados = [];
// console.log();

// while (i != 20)
// {
//     numeros[i] = Math.floor(Math.random() * 101);

//     i++;
// }

// console.log();
// console.log("Números: ", numeros);

// numerosOrdenados = numeros.sort(function(a, b) { return a - b; });

// console.log("Números ordenados: ", numerosOrdenados);
// console.log();


// let listaNumeros = [20, 32, 18];
// listaNumeros[0] = 20
// listaNumeros[1] = 32
// listaNumeros[2] = 18

// console.log(listaNumeros);
// console.log();

// listaNumeros.sort((a, b) => {
//     console.log("a: " + a);
//     console.log("b: " + b);
//     console.log();
//     return a - b;
// });

// console.log(listaNumeros);
