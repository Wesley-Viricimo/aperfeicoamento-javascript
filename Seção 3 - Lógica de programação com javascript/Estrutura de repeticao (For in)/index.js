const frutas = ['Pera', 'Maçã', 'Uva'];

/*for (let i in frutas) { //PERCORRE TODOS OS ITENS DO VETOR
    console.log(frutas[i]);
}*/

const pessoa = {
    nome: "Wesley",
    sobrenome: "Viricimo",
    idade: 27
}

for (let i in pessoa) { //PERCORRE TODAS AS PROPRIEDADES DO OBJETO, NESTE CASO, NOME, SOBRENOME E IDADE
    console.log(i, pessoa[i]);
}