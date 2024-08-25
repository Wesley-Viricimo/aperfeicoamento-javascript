//DECLARAÇÃO DE FUNÇÃO (FUNCTION HOISTING) MESMO QUE A FUNÇÃO SEJA CHAMADA ANTES DA SUA DECLARAÇÃO E JAVASCRIPT JOGARÁ A FUNÇÃO PARA O TOPO EM TEMPO DE EXECUÇÃO
falaOi();

function falaOi() {
    console.log('Oi');
}

//FIRST-CLASS OBJECTS (OBJETOS DE PRIMEIRA CLASSE)
//FUNCTION EXPRESSION
const souUmDado = function() {
    console.log('Sou um dado.');
}

souUmDado();

//ARROW FUNCTION
const funcaoArrow = () => {
    console.log('Função arrow');
};

funcaoArrow();