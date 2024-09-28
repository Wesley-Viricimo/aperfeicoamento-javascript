import { nome, sobrenome, idade, soma, Pessoa } from './modulo1' //NA IMPORTAÇÃO PRECISA DECLARAR ENTRE CHAVES O NOME FUNÇÃO OU VARIÁVEL QUE ESTÁ IMPORTANDO E EM QUAL ARQUIVO ELE ESTÁ LOCALIZADO

alert(`nome ${nome}, sobrenome ${sobrenome}, idade ${idade}`);
alert(soma(1, 3));

const p1 = new Pessoa('Wesley', 'Viricimo', 27);
console.log(p1);