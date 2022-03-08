// PROMESSA => DUAS POSSIBILIDADES DE RETORNO

// CUMPRI COM A PROMESSA     => resolve -> .then()
// NÃO CUMPRI COM A PROMESSA => reject  -> .catch()

function enviarEmail(corpo, destinatario)
{
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let cumpriu = false;

            if (cumpriu)
            {
                // VAI CUMPRIR
                resolve(`E-mail com o corpo "${corpo}" foi enviado ao ${destinatario}`); 
            }
            else
            {
                // NÃO VAI CUMPRIR
                reject("Falha na rede!");
            }

        }, 2000);

    });
}

console.log();
enviarEmail("Bom dia!", "blue@blueedtech.com.br")
    .then(function(msgResolve) {
        console.log(msgResolve);
        console.log();
        console.log("E-mail enviado com sucesso!")
        console.log();
    })
    .catch((msgReject) => {
        console.log(msgReject);
        console.log();
        console.log("Erro ao enviar o e-mail!");
        console.log();
    });