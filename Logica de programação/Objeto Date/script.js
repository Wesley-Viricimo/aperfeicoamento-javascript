const data = new Date('2022-11-03 18:58:57');
/*console.log('Dia', data.getDate());           //Retorna o dia
console.log('Mês', data.getMonth());            //Retorna o mês
console.log('Ano', data.getFullYear());         //Retorna o ano
console.log('Hora', data.getHours());           //Retorna a hora
console.log('Min', data.getMinutes());          //Retorna os minutos
console.log('Seg', data.getSeconds());          //Retorna os segundos
console.log('MS', data.getMilliseconds());      //Retorna os milisegundos
console.log('Dia semana', data.getDay());       //Retorna o dia da semana
console.log(data.toString());
*/

const diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo'; 
        break;
    case 1:
        diaSemanaTexto = 'Segunda'; 
        break;
    case 2:
        diaSemanaTexto = 'Terça'; 
        break;
    case 3:
        diaSemanaTexto = 'Quarta'; 
        break;
    case 4:
        diaSemanaTexto = 'Quinta'; 
        break;
    case 5:
        diaSemanaTexto = 'Sexta'; 
        break;
    case 6:
        diaSemanaTexto = 'Sábado'; 
        break;
}

console.log(diaSemanaTexto);