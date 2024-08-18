/*
const data = new Date();
const h1 = document.querySelector('#resultado');

criaData(data);

function criaData(data){
const diaSemana = retornaDiaSemanaAtual(data.getDay());
const dia = data.getDate();
const mes = retornaMesAtual(data.getMonth());
const ano = data.getFullYear();
const hora = data.getHours();
const min = data.getMinutes();

return `${diaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${min} `;
}

function retornaMesAtual(mesAtual) {
    let mesAtualTexto;

    switch (mesAtual) {
        case 0:
            mesAtualTexto = 'Janeiro';
            break;
        case 1:
            mesAtualTexto = 'Fevereiro';
            break;
        case 2:
            mesAtualTexto = 'Março';
            break;
        case 3:
            mesAtualTexto = 'Abril';
            break;
        case 4:
            mesAtualTexto = 'Maio';
            break;
        case 5:
            mesAtualTexto = 'Junho';
            break;
        case 6:
            mesAtualTexto = 'Julho';
            break;
        case 7:
            mesAtualTexto = 'Agosto';
            break;
        case 8:
            mesAtualTexto = 'Setembro';
            break;
        case 9:
            mesAtualTexto = 'Outubro';
            break;
        case 10:
            mesAtualTexto = 'Novembro';
            break;
        case 11:
            mesAtualTexto = 'Dezembro';
            break;
    }

    return mesAtualTexto;
}

function retornaDiaSemanaAtual(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            break;
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            break;
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            break;
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            break;
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            break;
        case 6:
            diaSemanaTexto = 'Sábado';
            break;
    }
    
    return diaSemanaTexto;
}

h1.innerHTML = criaData(data);
*/

const data = new Date();
const h1 = document.querySelector('#resultado');

const opcoes = {
    dateStyle: 'full'
};

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);


