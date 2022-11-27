const elementos = [
    {tag: 'p', texto: 'Frase1'},
    {tag: 'div', texto: 'Frase2'},
    {tag: 'section', texto: 'Frase3'},
    {tag: 'footer', texto: 'Frase4'},
];

const container = document.querySelector('.container');//Selecionando o container criado na classe HTML;
const div = document.createElement('div'); //Criando o elemento HTML DIV;

for (let i = 0; i < elementos.length; i++){//Percorrendo todos os elementos do array de frase
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;

    tagCriada.appendChild(texto)
    div.appendChild(tagCriada);
}


container.appendChild(div);