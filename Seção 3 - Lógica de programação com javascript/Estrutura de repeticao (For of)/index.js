const nomes = ['Wesley', 'Viricimo', 'Silva'];

/*for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}*/

for(let i in nomes) { //PERCORRE A LISTA DE INDICES
    console.log(nomes[i]);
}

console.log('####');

for(let valor of nomes) { //PERCORRE A LISTA DE VALORES
    console.log(valor);
}

console.log('####');

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});

