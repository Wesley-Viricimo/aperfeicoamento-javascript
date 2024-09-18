function aguarde(msg, tempo) {
    return new Promise((resolve, reject) => { //A PROMISE TEM POR PADRÃO DOIS PARÂMETROS, SENDO ELES RESOLVE E REJECT
        if(typeof msg !== 'string') reject('Valor informado precisa ser string'); //REJEITANDO SE O PRIMEIRO PARÂMETRO NÃO FOR DO TIPO STRING
        
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

const promises = [
    aguarde('Promise 1', 3000),
    aguarde('Promise 2', 500),
    aguarde('Promise 3', 1000)
];

//PROMISSE ALL EXECUTA UM ARRAY DE PROMISSES E RETORNA O ARRAY DE PROMISSES - OBS: SE UMA PROMISSE FOR REJEITADA, NENHUMA SERÁ EXECUTADA
/*Promise.all(promises) 
    .then(function(valor) {
        console.log(valor)
    }).catch(function(erro) {
        console.log(erro);
    });*/

//PROMISSE RACE EXECUTA E RETORNA A PRIMEIRA PROMISSE QUE FOR RESOLVIDA
Promise.race(promises) 
    .then(function(valor) {
        console.log(valor)
    }).catch(function(erro) {
        console.log(erro);
    });

/*aguarde(1, rand(1, 3))
    .then(resposta => { //COMO A FUNÇÃO AGUARDE RETORNA UMA PROMISSE, PODE SER ADICIONADA A FUNÇÃO THEN QUE RECEBE O PARÂMETRO ENVIADO PARA O RESOLVE
        console.log(resposta);
    }).catch(erro => { //CAI NO CATCH CASO A PROMISSE TENHA SIDO REJEITADA
        console.log(erro);
    });*/