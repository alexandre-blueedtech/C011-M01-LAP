const prompt = require("prompt-sync")();

// ex01

// const num1 = +prompt("Num 1: ");
// const num2 = +prompt("Num 2: ");

// if (num1 > num2)
// {
//     console.log("Num 1 é maior: " + num1);
// }
// else if (num2 > num1)
// {
//     console.log(`Num 2 é maior: ${num2}`);
// }


// ex 05

// Faça um programa que leia 3 valores que representam os lados de um triângulo A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos:
// Se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO;
// Se A² = B² + C² , apresente a mensagem: TRIANGULO RETANGULO;
// Se A² > B² + C² , apresente a mensagem: TRIANGULO OBTUSANGULO;
// Se A² < B² + C² , apresente a mensagem: TRIANGULO ACUTANGULO;
// Se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO;
// Se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES;

let A = +prompt("Digite o valor para o lado 1: ");
let B = +prompt("Digite o valor para o lado 1: ");
let C = +prompt("Digite o valor para o lado 1: ");

let X = 0;

console.log();
console.log("----- ORDEM -----");
console.log(`A: ${A} | B: ${B} | C: ${C}`);
console.log("-----------------");
console.log();

if (A < B)
{
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    X = A;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    A = B;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    B = X;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);

    console.log();
    console.log("----- ORDEM -----");
    console.log(`A: ${A} | B: ${B} | C: ${C}`);
    console.log("-----------------");
    console.log();
}

if (B < C)
{
    console.log(`X: ${X} | B: ${B} | C: ${C}`);
    X = B;
    console.log(`X: ${X} | B: ${B} | C: ${C}`);
    B = C;
    console.log(`X: ${X} | B: ${B} | C: ${C}`);
    C = X;
    console.log(`X: ${X} | B: ${B} | C: ${C}`);

    console.log();
    console.log("----- ORDEM -----");
    console.log(`A: ${A} | B: ${B} | C: ${C}`);
    console.log("-----------------");
    console.log();
}

if (A < B)
{
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    X = A;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    A = B;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    B = X;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);

    console.log();
    console.log("----- ORDEM -----");
    console.log(`A: ${A} | B: ${B} | C: ${C}`);
    console.log("-----------------");
    console.log();
}

console.log();
console.log("----- TIPO DE TRIÂNGULO -----");
console.log();

if (A >= (B + C))
{
    console.log("NÃO FORMA TRIÂNGULO");
}
else
{
    if ( (A*A) == ( (B*B) + (C*C) ) )
    {
        console.log("TRIANGULO RETÂNGULO");
    }
    if ( (A*A) > ( (B*B) + (C*C) ) )
    {
        console.log("TRIANGULO OBTUSÂNGULO");
    }
    if ( (A*A) < ( (B*B) + (C*C) ) )
    {
        console.log("TRIANGULO ACUTÂNGULO");
    }
    if ( A == B && B == C )
    {
        console.log("TRIANGULO EQUILATERO");
    }
    if ( (A == B && A != C) || (B == C && B != A) )
    {
        console.log("TRIANGULO ISOSCELES");
    }
}

console.log();
console.log();
console.log("----- FIM -----");
console.log();
console.log();