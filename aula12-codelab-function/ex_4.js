// Crie uma função que calcula a quantidade mínima de passos que o/a Master Bluemer precisa dar para atravessar uma rua qualquer, de acordo com os seguintes requisitos:
// O/A Master Bluemer (MB) deseja atravessar uma rua qualquer. Inicialmente, MB está localizado em uma posição X, e deseja chegar a uma posição maior ou igual a Y. A cada passo que MB dá, ele percorre uma distância fixa Z. Nossa função deve:
// Contar a quantidade mínima de passos que MB precisa dar para atravessar a rua, ou seja, sair da posição X e chegar ou ultrapassar à posição Y;
// Possuir 3 parâmetros (3 números inteiros X, Y e Z);
// Retornar um número mínimo de passos que inicie da posição X e vá para uma posição maior ou igual a Y.

// Exemplo de saída do programa
// Dando como exemplo os números de entrada:
    // X = 5;
    // Y = 40;
    // D = 1.
// Ao dar um passo, deve ser somada a distância inicial + a distância do passo dado, ou seja:
    // Ao dar um passo = 5 + 1;
    // Dois passos: 5 + 1 + 1.
// E assim, sucessivamente, até chegar ou passar à distância final de 40.

function passosMinimos (x, y, d)
{
    for (let i = x; i < y; i++)
    {
        console.log(`${x} + ${d} * ${i - x + 1} = ${x + d * (i - x + 1)}`);
    }
    
    return (y - x) / d;
}

let numMinimoPassos = passosMinimos(5, 40, 1);
console.log();
console.log("Nº de passos minímos: " + numMinimoPassos);
console.log();
