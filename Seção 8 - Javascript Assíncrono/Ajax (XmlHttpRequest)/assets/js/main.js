const request = obj => { //QUEM FOR UTILIZAR ESTA CONSTANTE DEVE FORNECER UM OBJETO;
    return new Promise((resolve, reject) => { //RETORNA PROMISSE QUE ESPERA DOIS PARÂMETROS POR PADRÃO, RESOLVE E REJECT
        const xhr = new XMLHttpRequest(); //INSTÂNCIA DO OBJETO PARA UTILIZAÇÃO DO AJAX
        xhr.open(obj.method, obj.url, true); //MÉTODO OPEN DO OBJETO XMLHttpRequest ESPERA 3 ARGUMENTOS, SENDO ELES: O VERBO HTTP (GET, POST, PUT, PATCH, DELETE), A URL QUE DESEJA REALIZAR ESTA REQUISIÇAO E SE É UMA REQUISIÇÃO ASSÍNCRONA OU NÃO, PASSANDO UM VALOR BOOLEANO.
        xhr.send(); //ENVIA A REQUISIÇÃO CRIADA

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    });
}

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a' ) {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href');
    const objConfig = {
        method: 'GET',
        url: href
    };

    try {
        const response = await request(objConfig);
        carregaResultado(response);
    } catch(e) {
        console.log(e);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}