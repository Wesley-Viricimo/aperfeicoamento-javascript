const nome = 'Wesley';
const sobrenome = 'Viricimo';
const idade = 27;

function soma(x, y) {
    return x + y;
}

export class Pessoa { //UMA OUTRA FORMA DE EXPORTAR É DIRETO NA DECLARAÇÃO DA CLASSE, VARIÁVEL OU MÉTODO
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
}

export { nome, sobrenome, idade, soma }; //UMA DAS FORMAS DE EXPORTAR É ENTRE CHAVES E PASSANDO ENTRE ELAS OS MÉTODOS E VARIÁVEIS QUE DESEJA EXPORTAR