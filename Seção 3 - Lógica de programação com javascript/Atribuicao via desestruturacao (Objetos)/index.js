const pessoa = {
    nome : 'Wesley',
    sobrenome : 'Viricimo',
    idade : 25,
    endereco : {
        rua : 'Av Brasil',
        numero : 7070
    }
};

// Atribuição via desestruturação
const { nome, sobrenome, idade, endereco: { rua, numero} } = pessoa; //Extraindo do objeto a chave informada
console.log(nome, sobrenome, idade);
console.log(rua, numero);
console.log()