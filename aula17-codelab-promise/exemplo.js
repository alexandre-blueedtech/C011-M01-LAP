
const prompt = require("prompt-sync")();

let sair;

while(true)
{
    let escolhaHistoria = prompt("1 ou 2");

    if (escolhaHistoria == 1)
    {
        historia1();
    }
    else if (escolhaHistoria == 2)
    {
        historia2();
    }


    sair = true;
    if (sair == true)
    {
        break;
    }
}


function historia1()
{
    console.log("historia 1");
}

function historia2()
{
    console.log("historia 2");
}