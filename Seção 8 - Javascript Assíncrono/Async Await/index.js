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

async function executa() { //FUNÇÕES QUE USARÃO AWAIT PRECISAM ESTAREM ASSINADAS COM ASYNC
    try {
        const fase1 = await aguarde('Fase 1', rand()); //NÃO CONTINUA A EXECUÇÃO ENQUANTO NÃO FINALIZAR
        console.log(fase1);
        const fase2 = await aguarde('Fase 2', rand());
        console.log(fase2);
        const fase3 = await aguarde('Fase 3', rand());
        console.log(fase3);
    
        console.log('Terminou na fase: ', fase3);
    } catch(e) {
        console.log(e);
    }
}

executa();
