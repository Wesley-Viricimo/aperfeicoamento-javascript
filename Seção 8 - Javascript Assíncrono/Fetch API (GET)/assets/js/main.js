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
    const response = await fetch(href);
    const html = await response.text();
    carregaResultado(html)
    

    /*fetch(href) //CARREGA O LINK DO ELEMENTO EL
        .then(response => response.text()) //PEGANDO A RESPOSTA OBTIDA E CONVERTENDO PARA TEXTO
        .then(html => carregaResultado(html))
        .catch(e => console.log(e));*/
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}