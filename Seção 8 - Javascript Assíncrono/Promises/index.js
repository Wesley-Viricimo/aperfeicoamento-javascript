function aguarde(msg, tempo) {
    return new Promise((resolve, reject) => { //A PROMISE TEM POR PADRÃO DOIS PARÂMETROS, SENDO ELES RESOLVE E REJECT
        setTimeout(() => { //SIMULANDO UMA REQUISIÇÃO A API
            resolve(msg);  //DEPOIS DO TEMPO INFORMADO AO TIMEOUT SERÁ ENVIADA A MENSAGEM PARA O RESOLVE
        }, tempo);
    });
}

function rand(min, max) { //FUNÇÃO PARA GERAR UM NÚMERO RANDOMICO 
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

aguarde('Frase 1', rand(1, 3))
    .then(resposta => { //COMO A FUNÇÃO AGUARDE RETORNA UMA PROMISSE, PODE SER ADICIONADA A FUNÇÃO THEN QUE RECEBE O PARÂMETRO ENVIADO PARA O RESOLVE
        console.log(resposta);
        return aguarde('Frase 2', rand(1, 3)); //QUANDO TEM VÁRIOS THEN ENCADEADOS, SOMENTE QUANDO O PRIMEIRO ACABA O SEGUNDO INICIA, E ASSIM SUCESSIVAMENTE
    }).then(resposta => {
        console.log(resposta);
        return aguarde('Frase 3', rand(1, 3));
    }).then(resposta => {
        console.log(resposta);
    })
    .catch();

aguarde('Frase 2', rand(1, 3));
aguarde('Frase 3', rand(1, 3));