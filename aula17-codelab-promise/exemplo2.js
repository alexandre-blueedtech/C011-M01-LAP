// function teste1()
// {
//     console.log("TUDO IGUAL");
//     console.log("TUDO IGUAL");
//     caminho1();
// }


// function teste2()
// {
//     console.log("TUDO IGUAL");
//     console.log("TUDO IGUAL");
//     caminho2();
// }

// //POSSIBILIDADE 1
// function testeFunc(caminho)
// {
//     console.log("TUDO IGUAL");
//     console.log("TUDO IGUAL");

//     if (caminho == 1)
//     {
//         caminho1();
//     }
//     else if (caminho == 2)
//     {
//         caminho2();
//     }
// }

//POSSIBILIDADE 2
function testeFunc(caminho)
{
    console.log("TUDO IGUAL");
    console.log("TUDO IGUAL");

    caminho();
}

function caminho1()
{
    console.log("caminho 1");
}

function caminho2()
{
    console.log("caminho 2");
}

let teste = 2;
if (teste == 1)
{
    testeFunc(caminho1);
}
else if (teste == 2)
{
    testeFunc(caminho2);
}