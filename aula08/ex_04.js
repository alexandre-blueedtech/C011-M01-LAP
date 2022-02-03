const prompt = require("prompt-sync")()
tempo1 = 0;
        tempo2 = 0;
        tempo3 = 0;


        function conversorTemp (grau, temp1) {
        if (temp1 == 'C') {
        tempo2 = grau
        tempo1 = grau * 9/5 + 32
        tempo3 = grau + 273,15 

        console.log(`Está fazendo ${tempo2} graus Celsius, ${tempo1} Fahrenheit e ${tempo3} Kelvin. `) 
    } else if (temp1 == 'F') {
        tempo2 = grau
        tempo1 = grau * 9/5 + 32
        tempo3 = grau + 273,15 
        console.log(`Está fazendo ${tempo1} graus Fahrenheit, ${tempo2} Celsius e ${tempo3} Kelvin`) 
        } else if (temp1 == 'K') {
            tempo2 = grau
            tempo1 = grau * 9/5 + 32
            tempo3 = grau + 273,15 
            console.log(`Está fazendo ${tempo3} graus Kelvin, ${tempo1} Fahrenheit ${tempo2} Celsius.`) 

    }}

        var nomes = ['Celsius', 'Fahrenheit', 'Kelvin']
        var grau = +prompt('Qual grau está fazendo por ai? ')
        var temp1 = prompt('Qual a definição da sua temperatura? (C para Celsius | F para Fahrenheit | K para Kelvin) ').toUpperCase();

        conversorTemp(grau, temp1)