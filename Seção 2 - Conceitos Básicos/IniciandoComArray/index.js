/*const pessoa1 = {
    nome: "Wesley",
    sobrenome: "Viricimo",
    idade: 25
};

const pessoa2 = {
    nome: "Jessica",
    sobrenome: "Viricimo",
    idade: 27
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);
*/

function criaPessoa (nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa("Wesley", "Viricimo", 25);
const pessoa2 = criaPessoa("Jessica", "Viricimo", 27);

console.log(pessoa1);
console.log(pessoa2);