console.log(
    "Olá, aconteceu um crime nessa cidade, a Carla foi assassinada brutalmente, eu estou encarregado de investigar esse crime, por isso preciso te fazer algumas perguntas... Vamos lá!",
);

let pergunta1 = prompt("Você telefonou para a vítima? [S/N] ");
let pergunta2 = prompt("Você esteve no local do crime? [S/N] ");
let pergunta3 = prompt("Você mora perto da vítima? [S/N] ");
let pergunta4 = prompt("Você devia para a vítima? [S/N] ");
let pergunta5 = prompt("Você já trabalhou com a vítima? [S/N] ");

let cont = 0;

if (pergunta1 === "S" || pergunta1 === "s") {
    cont++;
}
// console.log(cont)
if (pergunta2 === "S" || pergunta2 === "s") {
    cont++;
}
// console.log(cont)
if (pergunta3 === "S" || pergunta3 === "s") {
    cont++;
}
// console.log(cont)
if (pergunta4 === "S" || pergunta4 === "s") {
    cont++;
}
// console.log(cont)
if (pergunta5 === "S" || pergunta5 === "s") {
    cont++;
}
// console.log(cont)

console.log(cont);

if (cont === 1 || cont === 2) {
    console.log("Você é amigo do criminoso!");
} else if (cont === 3) {
    console.log("Você é suspeito do crime!");
} else if (cont === 4) {
    console.log("Você é cúmplice do crime!");
} else if (cont === 5) {
    console.log("Você é o assassino!");
} else {
    console.log("Você é inocente de todas as acusações!");
}