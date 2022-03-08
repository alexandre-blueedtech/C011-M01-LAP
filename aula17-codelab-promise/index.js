const prompt = require("prompt-sync")();


// -------- SINCRONIZADO / ASSINCRONIZADO ------------

setTimeout( () => console.log("Pizza pronta!!!"), 5000 );

console.log("Vou ao mercado");


// -------- CALLBACK ------------

// function pizzaPronta(sabor) {
//     console.log(`Sua pizza de ${sabor} está pronta.`);
// }
  
// function pedirPizza(callback) {
//     const sabor = prompt('Escolha o sabor da sua pizza: ');
//     callback(sabor);
// }
  
// pedirPizza(pizzaPronta);




// --------- PROMISE ------------

// soma();

// function soma()
// {
//     let resultado = 1 + 3;

//     if (resultado == 2)
//     {
//         msgSucesso();
//     }
//     else
//     {
//         msgErro();
//     }
// }

// function msgSucesso()
// {
//     console.log("Sucesso! Resultado é 2");
// }

// function msgErro()
// {
//     console.log("Opss... Erro!");
// }


// function soma()
// {
//     let promise = new Promise( (resolve, reject) => {
//         let resultado = 1 + 3;

//         if (resultado == 2)
//         {
//             // CUMPRIU COM O PROMETIDO
//             resolve("Sucesso! Resultado é 2");
//         }
//         else
//         {
//             // NÃO CUMPRIU COM O PROMETIDO
//             reject("Opss.... Erro");
//         }
//     });

//     promise.then(
//         (mensagem) => {
//             console.log("Isto é o then: " + mensagem);
//         }
//     ).catch(
//         (erro) => {
//             console.log("Isto é o catch: " + erro);
//         }
//     );
// }

// soma();