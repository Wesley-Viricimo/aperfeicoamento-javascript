//ESCREVER UMA FUNÇÃO CHAMADA EPAISAGEM QUE RECEBE DOIS ARGUMENTOS, LARGURA E ALTURA
//DE UMA IMAGEM (NUMBER). RETORNE TRUE SE A IMAGEM ESTIVER NO MODO PAISAGEM

//FEITO POR MIM
/*function ePaisagem(largura, altura) {
    return largura > altura ? true : false;
}*/

//FEITO PELO PROFESSOR
/*function ePaisagem(largura, altura) {
    return largura > altura;
}*/

//FUNCAO ANONIMA COM ARROW FUNCTION QUE ESPERA DOIS VALORES E RETORNA SE A LARGURA FOR MAIOR QUE A ALTURA
const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1920, 1080));