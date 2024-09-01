//FILTER SEMPRE RETORNA UM ARRAY COM A MESMA QUANTIDADE DE ELEMENTOS OU MENOS
//TEM A FINALIDADE DE FILTRAR OS DADOS DO ARRAY

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//FILTRANDO COM UMA FUNÇÃO ARROW OS NÚMEROS EM QUE O VALOR SEJA MAIOR QUE 10
const numerosFiltrados = numeros.filter(valor => valor > 10);

console.log(numerosFiltrados);

const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Eduardo', idade: 55 },
    {nome: 'Letícia', idade: 19 },
    {nome: 'Rosana', idade: 32 },
    {nome: 'Wallace', idade: 47 }
];

//FILTRANDO PESSOAS COM TAMANHO DO NOME MAIOR QUE 5 CARACTERES
//const pessoasFiltradas = pessoas.filter(pessoa => pessoa.nome.length > 5);

//FILTRANDO PESSOAS COM MAIS DE 50 ANOS
//const pessoasFiltradas = pessoas.filter(pessoa => pessoa.idade > 50);

//FILTRANDO PESSOAS NA QUAL O NOME TERMINA COM A
const pessoasFiltradas = pessoas.filter(pessoa => pessoa.nome.toLowerCase().endsWith('a'));


console.log(pessoasFiltradas);