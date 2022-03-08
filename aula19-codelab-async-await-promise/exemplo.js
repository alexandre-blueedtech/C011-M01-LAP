let horario = {
    dia: 1,
    horas: 2,
    minutos: 30
}


console.log(`Dia: ${horario.dia}`);
mostraHora(horario.horas, horario.minutos)


function mostraHora(horas, minutos)
{

    if (horas <= 9 && minutos <= 9)
    {
        console.log(`Hora: 0${horas}:0${minutos}`);
    }
    else if (horas <= 9 && minutos > 9)
    {
        console.log(`Hora: 0${horas}:${minutos}`);
    }
    else if (minutos <= 9)
    {
        console.log(`Hora: ${horas}:0${minutos}`);
    }
    else
    {
        console.log(`Hora: ${horas}:${minutos}`);
    }
}
