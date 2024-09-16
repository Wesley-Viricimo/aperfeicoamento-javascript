//SOME TODOS OS NÚMEROS (REDUCE)
//RETORNE UM ARRAY COM PARES (FILTER)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//RETORNA A SOMA DE TODOS OS NÚMEROS DO ARRAY
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0);

//RETORNA OS NÚMEROS PARES DO ARRAY
const totalPares = numeros.reduce(function(acumulador, valor, indice, array) {
    if(valor % 2 === 0) acumulador.push(valor); //SE O NÚMERO FOR DIVISÍVEL POR 2 SERÁ ADICIONADO NO ACUMULADOR
    return acumulador;
}, []);

console.log(total);

