const prompt = require("prompt-sync")();

// 01
// Faça um Programa que leia 20 números inteiros e armazene-os num array. Armazene os números pares no array PAR e os números IMPARES no array IMPAR. Imprima os três vetores.

// let i = 0;
// let numero = 0;
// let impares = [];
// let pares = [];
// while(i != 4)
// {
//     numero = +prompt("Digite um nº: ");

//     if (numero % 2 == 0)
//     {
//         pares.push(numero);
//     }
//     else
//     {
//         impares.push(numero);
//     }

//     i++;
// }

// console.log();
// console.log(`Pares: ${pares}`);
// console.log(`Impares: ${impares}`);
// console.log();


// 02
// Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo array. Imprima a média de idade e de altura.

let pessoas = 0;
let idades = [];
let alturas = [];

let somaIdades = 0;
let somaAlturas = 0;

while (pessoas != 5)
{
    idades[pessoas] = +prompt(`Digite a ${pessoas + 1}ª idade: `);
    alturas[pessoas] = +prompt(`Digite a ${pessoas + 1}ª altura: `);

    somaIdades += idades[pessoas];
    somaAlturas += alturas[pessoas];

    console.log();

    pessoas++;
}

console.log("Idades:", idades);
console.log("Alturas:", alturas);

let mediaIdades = somaIdades / idades.length;
let mediaAlturas = somaAlturas / alturas.length;

console.log();
console.log("Média Idades:", mediaIdades);
console.log("Média Alturas:", mediaAlturas);
console.log();

