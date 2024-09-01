//MÉTODO MAP RETORNA A MESMA QUANTIDADE DE DADOS DO ARRAY ORIGINAL
//A DIFERENÇA É QUE PODEM SER REALIZADAS OPERAÇÕES COM OS DADOS

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosDobrados = numeros.map(valor => {
    return valor * 2;
});

const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Eduardo', idade: 55 },
    {nome: 'Letícia', idade: 19 },
    {nome: 'Rosana', idade: 32 },
    {nome: 'Wallace', idade: 47 }
];

//MAPEIA O ARRAY DE OBJETOS RETORNANDO APENAS OS NOMES DAS PESSOAS
/*const pessoasMapeadas = pessoas.map(pessoa => {
    return pessoa.nome;
});*/

//MAPEIA O ARRAY DE OBJETOS RETORNANDO APENAS AS IDADES DAS PESSOAS
/*const pessoasMapeadas = pessoas.map(pessoa => {
    return pessoa.idade;
});*/

//MAPEIA O ARRAY DE OBJETOS E ADICIONA A PROPRIEDADE ID
const pessoasMapeadas = pessoas.map(function(pessoa, indice) {
    pessoa.id = indice;
    return pessoa;
});

console.log(pessoasMapeadas);