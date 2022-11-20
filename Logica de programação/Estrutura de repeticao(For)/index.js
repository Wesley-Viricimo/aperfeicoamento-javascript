// i - index
for(let i = 0; i <= 10; i++ ){ //Inicializando a variável com 0 e enquanto a mesma for menor que 10, incrementar de 1 em 1
    const parImpar = i % 2 == 0 ? 'par' : 'ímpar';//Se o resto do índice atual dividido por 2 for igual a 0 será par, se não será impar;
    console.log(`O Número ${i} é`, parImpar);
}

const nomes = ['Wesley', 'Jessica', 'Ana'];

for(let i = 0; i < nomes.length; i++){//Inicializando a variável com 0 e enquanto o mesmo for menor que o tamanho total do array, incrementar de 1 em 1;
    console.log(`Índice ${i}`, nomes[i]);
}