function contas (valor1, valor2)
{
    console.log(`Soma: ${valor1 + valor2}`);
    console.log(`Subtração: ${valor1 - valor2}`);
    console.log(`Multiplicação: ${valor1 * valor2}`);
    if (valor2 === 0)
    {
        console.log("Impossível dividir por 0");
    }
    else
    {
        console.log(`Divisão: ${valor1 / valor2}`);
    }
}

contas(1, 2);