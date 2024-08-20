const div = document.querySelector('.paragrafos'); //OBTENDO A DIV DA CLASSE PARAGRAFOS
const paragrafos = div.querySelectorAll('p'); //OBTENDO TODAS AS TAGS P DENTRO DA DIV PARAGRAFOS

const estilosBody = getComputedStyle(document.body); //OBTEM OS ESTILOS CSS DA TAG BODY DO HTML
const backgroundColorBody = estilosBody.backgroundColor; //OBTENDO A PROPRIEDADE BACKGROUND DO ARQUIVO CSS DA TAG BODY DO HTML

for(let p of paragrafos) { //PARA CADA PARAGRAFO QUE FOR ENCONTRADO 
    p.style.backgroundColor = backgroundColorBody; //APLICAR A COR DO BODY NO BACKGROUND DO PARAGRAFO
    p.style.color = '#FFFFFF'; //ALTERA A COR DA FONTE DO PARAGRAFO
}