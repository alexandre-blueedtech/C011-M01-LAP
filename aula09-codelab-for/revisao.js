// console.clear();
// console.log();


// let listaNomes = ["Alexandre", "Felipe", "Gabriela"];

// // listaNomes[0] = Alexandre
// // listaNomes[1] = Felipe
// // listaNomes[2] = Gabriela

// console.log(listaNomes);
// console.log();

// // FOR IN

// console.log("----- FOR IN -----");
// for (let indice in listaNomes)
// {
//     console.log(indice);
// }

// console.log();

// console.log("----- FOR OF -----");
// // FOR OF

// for (let valor of listaNomes)
// {
//     console.log(valor);
// }

// console.log();

// console.log("---- FOR INDEXADO ----");
// // FOR INDEXADO
// for (let i = 0; i < listaNomes.length; i++)
// {
//     console.log(`${i} - ${listaNomes[i]}`);
// }

// console.log();

const prompt = require("prompt-sync")();


// let numero = 0;

// do {

//     numero = +prompt("digite um nº: ");

//     if (numero == 1 || numero == 2 || numero == 3)
//     {
//         break;
//     }

// } while (true);

// let numeroRodadas;
// do {
//     numeroRodadas = +prompt("num rodadas: ");

//     if (numeroRodadas > 0 && numeroRodadas <= 100)
//     {
//         break;
//     }
//     else
//     {
//         console.log("Erro")
//     }

// } while (true)





// console.log(numeroRodadas);

// for (let i = 0; i < numeroRodadas; i++)
// {
//     console.log("seu jogo");
// }


// let nome = "Alex123Russi";
// let numeros = ['0', '1', '2'];

// for (let valor of nome) {
//     console.log(valor);

//     for (let valorNum of numeros) {
//         if (valor == valorNum) {
//             console.log("NUMERO!")
//         }
//     }
// }


// const prompt = require('prompt-sync')();
console.clear();

let colunas = +prompt('Digite a quantidade desejada de colunas: ');
let linhas = +prompt('Digite a quantidade desejada de linhas: ');
let lista = [];
let a = 0;

for(i = 0; i < linhas; i++){
    for (let i = a; i < colunas + a; i++){
        lista.push(i)
    }
    console.log(lista);
    lista = []
    a++
}